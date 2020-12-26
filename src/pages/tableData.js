import React, { useEffect, useState } from "react";
import { Select, Table } from "antd";
import styled from "styled-components";
import axios from "axios";
import CompanyGraphs from "../components/companyGraphs";
import SummaryGraphs from "../components/summaryGraphs";
import Header from "../components/header";

const { Option } = Select;
const options = [
    "Рейтинг",
    "Наименование организации",
    "Собственник",
    "Кол-во дней на сайте",
    "Кол-во выполненных заказов",
    "Кол-во сорванных заказов",
    "Средняя цена",
    "Кол-во товара",
    "Медианная скидка",
    "Средний отзыв",
    "Кол-во просмотров",
    "Средняя стоимость доставки",
    "Медианное значение доставки",
    "Медианное значение доставки",
    "Cреднее качество обратной связи",
    "part_good_order",
    "part_orders_of_online",
    "part_orders_of_views",
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
`;
const columns = [
    {
        title: "Наименование организации",
        dataIndex: "name",
        key: "name",
        fixed: "left",
        sorter: (a, b) => a.rate - b.rate,
        defaultSortOrder: ["descend"],
    },
    {
        title: "Верифицирован",
        dataIndex: "verification",
        key: "verification",
        sorter: (a, b) => a.verification - b.verification,
        render:(value)=>{
            return value?'да':'нет'
        }
    },
    {
        title: "Собственник",
        dataIndex: "own",
        key: "own",
        sorter: (a, b) => a.own - b.own,
        render:(value)=>{
            return value?'да':'нет'
        }
    },
    {
        title: "Кол-во дней на сайте",
        dataIndex: "days_online",
        key: "days_online",
        sorter: (a, b) => a.days_online - b.days_online,
    },
    {
        title: "Кол-во выполненных заказов",
        dataIndex: "good_orders",
        key: "good_orders",
        sorter: (a, b) => a.good_orders - b.good_orders,
    },
    {
        title: "Кол-во сорванных заказов",
        dataIndex: "bad_orders",
        key: "bad_orders",
        sorter: (a, b) => a.bad_orders - b.bad_orders,
    },
    {
        title: "Средняя цена",
        dataIndex: "mean_product_price",
        key: "mean_product_price",
        sorter: (a, b) => a.mean_product_price - b.mean_product_price,
    },
    {
        title: "Кол-во товара",
        dataIndex: "count_products",
        key: "count_products",
        sorter: (a, b) => a.count_products - b.count_products,
    },
    {
        title: "Медианная скидка",
        dataIndex: "median_sale",
        key: "median_sale",
        sorter: (a, b) => a.median_sale - b.median_sale,
    },
    {
        title: "Средний отзыв",
        dataIndex: "mean_feedback",
        key: "mean_feedback",
        sorter: (a, b) => a.mean_feedback - b.mean_feedback,
        render:(value)=>{
            return value.toFixed(2)
        }
    },
    {
        title: "Кол-во просмотров",
        dataIndex: "sum_views",
        key: "sum_views",
        sorter: (a, b) => a.sum_views - b.sum_views,
    },
    {
        title: "Средняя стоимость доставки",
        dataIndex: "mean_cost_delivery",
        key: "mean_cost_delivery",
        sorter: (a, b) => a.mean_cost_delivery - b.mean_cost_delivery,
        render:(value)=>{
            return value.toFixed(2)
        }
    },
    {
        title: "Медианное значение доставки",
        dataIndex: "median_delivery_time",
        key: "median_delivery_time",
        sorter: (a, b) => a.median_delivery_time - b.median_delivery_time,
    },

    {
        title: "Среднее качество обратной связи",
        dataIndex: "mean_call",
        key: "mean_call",
        sorter: (a, b) => a.mean_call - b.mean_call,
        render:(value)=>{
            return value.toFixed(2)
        }
    },
];

const TableData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://hack-the-ice2020-python-back.herokuapp.com/api/companies/category/1?page=0&per_page=10&sort_by=rate&is_descending=1"
            )
            .then(({ data: { items } }) => {
                setLoading(false);
                setData(items);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, []);


    const handleChange = (e) => {
        console.log(e)
    }

    return (
        <Container>
            <Header />
            <Select
                mode="multiple"
                style={{
                    width: "100%",
                }}
                placeholder="choose filters"
                onChange={handleChange}
                optionLabelProp="label"
            >
                {displayOptions}
            </Select>

            <Table
                scroll={{
                    x: "auto",
                }}
                loading={loading}
                bordered={true}
                rowKey={(obj) => obj.name}
                style={{ margin: "0 50px", borderRadius: "50px" }}
                columns={columns}
                dataSource={data}
                expandedRowRender={
                    (record) => (
                        <div style={{margin: 20}}>
                            <CompanyGraphs
                                id={record.id}
                            />
                        </div>
                    )
                }
            />
            <SummaryGraphs data={data} />
        </Container>
    );
};

export default TableData;
