import React, {useEffect, useState} from 'react';
import {Select, Skeleton, Table} from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import CompanyGraphs from '../components/companyGraphs';
import SummaryGraphs from '../components/summaryGraphs';
import Header from '../components/header';

const {Option} = Select;
const options = [
    'Рейтинг',
    'Наименование организации',
    'Собственник',
    'Кол-во дней на сайте',
    'Кол-во выполненных заказов',
    'Кол-во сорванных заказов',
    'Средняя цена',
    'Кол-во товара',
    'Медианная скидка',
    'Средний отзыв',
    'Кол-во просмотров',
    'Средняя стоимость доставки',
    'Медианное значение доставки',
    'Cреднее качество обратной связи',
];

const displayOptions = [];
for (let i = 0; i < options.length; i++) {
    displayOptions.push(
        <Option value={options[i]} label={options[i]}>
            <div>{options[i]}</div>
        </Option>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(196, 196, 196, 0.2);
`;
const columns = [
    {
        title: 'Наименование организации',
        dataIndex: 'company',
        key: 'company',
        fixed: 'left',

    },
    {
        title: 'Верифицирован',
        dataIndex: 'verification',
        key: 'verification',
        sorter: (a, b) => a.verification - b.verification,
        render: (value) => {
            return value ? 'да' : 'нет';
        },
    },
    {
        title: 'Собственник',
        dataIndex: 'own',
        key: 'own',
        sorter: (a, b) => a.own - b.own,
        render: (value) => {
            return value ? 'да' : 'нет';
        },
    },
    {
        title: 'Кол-во дней на сайте',
        dataIndex: 'days_online',
        key: 'days_online',
        sorter: (a, b) => a.days_online - b.days_online,
    },
    {
        title: 'Кол-во выполненных заказов',
        dataIndex: 'good_orders',
        key: 'good_orders',
        sorter: (a, b) => a.good_orders - b.good_orders,
    },
    {
        title: 'Кол-во сорванных заказов',
        dataIndex: 'bad_orders',
        key: 'bad_orders',
        sorter: (a, b) => a.bad_orders - b.bad_orders,
    },
    {
        title: 'Средняя цена',
        dataIndex: 'mean_product_price',
        key: 'mean_product_price',
        sorter: (a, b) => a.mean_product_price - b.mean_product_price,
    },
    {
        title: 'Кол-во товара',
        dataIndex: 'count_products',
        key: 'count_products',
        sorter: (a, b) => a.count_products - b.count_products,
    },
    {
        title: 'Медианная скидка',
        dataIndex: 'median_sale',
        key: 'median_sale',
        sorter: (a, b) => a.median_sale - b.median_sale,
    },
    {
        title: 'Средний отзыв',
        dataIndex: 'mean_feedback',
        key: 'mean_feedback',
        sorter: (a, b) => a.mean_feedback - b.mean_feedback,
        render: (value) => {
            return value.toFixed(2);
        },
    },
    {
        title: 'Кол-во просмотров',
        dataIndex: 'sum_views',
        key: 'sum_views',
        sorter: (a, b) => a.sum_views - b.sum_views,
    },
    {
        title: 'Средняя стоимость доставки',
        dataIndex: 'mean_cost_delivery',
        key: 'mean_cost_delivery',
        sorter: (a, b) => a.mean_cost_delivery - b.mean_cost_delivery,
        render: (value) => {
            return value.toFixed(2);
        },
    },
    {
        title: 'Медианное значение доставки',
        dataIndex: 'median_delivery_time',
        key: 'median_delivery_time',
        sorter: (a, b) => a.median_delivery_time - b.median_delivery_time,
    },

    {
        title: 'Среднее качество обратной связи',
        dataIndex: 'mean_call',
        key: 'mean_call',
        sorter: (a, b) => a.mean_call - b.mean_call,
        render: (value) => {
            return value.toFixed(2);
        },
    },
];

const TableData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedColumns, setSelectedColumns] = useState(options);

    useEffect(() => {
        axios
            .get(
                'https://hack-the-ice2020-python-back.herokuapp.com/api/companies/?page=0&per_page=10&sort_by=rate&is_descending=1&chosen_chars=%5B%22verification%22%2C%20%22days_online%22%2C%20%22own%22%2C%20%22median_delivery_time%22%2C%22mean_product_price%22%2C%22good_orders%22%2C%20%22bad_orders%22%2C%22mean_feedback%22%2C%20%22mean_call%22%2C%20%22mean_cost_delivery%22%2C%22count_products%22%2C%20%22median_sale%22%2C%20%22sum_views%22%5D'
            )
            .then(({data: {items}}) => {
                let result = items.sort((a, b) => a.rate - b.rate)
                let i = 0
                result = result.map(item => {
                    const newRes = {...item}
                    i++
                    newRes.rate = i
                    return newRes
                })
                setLoading(false);
                setData(result);
            })
            .catch((e) => {
                setLoading(false);
            });
    }, []);

    const viewColumns = columns.reduce((acum, item) => {
        if (selectedColumns.includes(item.title)) {
            acum.push(item);
        }
        return acum;
    }, [{
        title: '#',
        dataIndex: 'rate',
        sorter: (a, b) => a.rate - b.rate,
        sortOrder:'ascend',
        key: 'rate',
    }]);

    return (
        <Container>
            <Header/>
            <Select
                mode="multiple"
                style={{
                    width: '100%',
                }}
                placeholder="choose filters"
                optionLabelProp="label"
                value={selectedColumns}
                onChange={(value) => setSelectedColumns(value)}
            >
                {displayOptions}
            </Select>

            <Table
                scroll={{
                    x: 'auto',
                }}
                loading={loading}
                bordered={true}
                rowKey={(obj) => obj.id}
                style={{margin: '0 50px'}}
                columns={viewColumns}
                dataSource={data}
                expandedRowRender={(record) => (
                    <div style={{margin: 20}}>
                        <CompanyGraphs id={record.id}/>
                    </div>
                )}
            />
            <Skeleton
                title={false}
                paragraph={{rows: 10}}
                loading={loading}
                width={'300px'}
            >
                <SummaryGraphs data={data}/>
            </Skeleton>
        </Container>
    );
};

export default TableData;
