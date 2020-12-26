import React, { useState } from "react";
import { Table, Select, Row, Layout } from "antd";
import Validation from "./validation";
import CompanyGraphs from "../components/companyGraphs";
import SummaryGraphs from "../components/summaryGraphs";

import Header from "../components/header";

const { Footer, Sider, Content } = Layout;
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
    "Cреднее качество обратной связи",
    "Кол-во просмотров",
    "Средняя стоимость доставки",
    "Медианное значение доставки",
    "Медианное значение доставки",
    "mean_call",
    "part_good_order",
    "part_orders_of_online",
    "part_orders_of_views",
];

const displayOptions = [];
for (let i = 0; i < options.length; i++) {
    console.log(options[i]);
    displayOptions.push(
        <Option value={options[i]} label={options[i]}>
            <div>{options[i]}</div>
        </Option>
    );
}

const formattedData = Object.entries(Validation.companies).map((item) => {
    const [key, value] = item;
    const result = { ...value, name: key };
    return result;
});
formattedData.forEach((item, i) => {
    item.key = i + 1;
});

// for (let i = 0; i < formattedData.length; i++) {
//     formattedData.push({
//         ID: i + 1,
//     });
// }
console.log(formattedData);
const TableData = () => {
    const [showColumns, setShowColumns] = useState(false);
    function handleChange(value) {
        setShowColumns(true);
        console.log(showColumns);
        console.log(`selected ${value}`);
    }

    const columns = [
        // {
        //     title: "Рейтинг",
        //     dataIndex: "ID",
        //     key: "ID",
        //     sorter: (a, b) => a.rate - b.rate,
        //     defaultSortOrder: ["descend"],
        //     fixed: "left",
        // },
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
            className: showColumns ? "hidden" : "",
            dataIndex: "verification",
            key: "verification",
            sorter: (a, b) => a.verification - b.verification,
        },
        {
            title: "Собственник",
            dataIndex: "own",
            key: "own",
            sorter: (a, b) => a.own - b.own,
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
        },
        {
            title: "Медианное значение доставки",
            dataIndex: "median_delivery_time",
            key: "median_delivery_time",
            sorter: (a, b) => a.median_delivery_time - b.median_delivery_time,
        },

        {
            title: "Медианное значение доставки",
            dataIndex: "median_delivery_time",
            key: "median_delivery_time",
            sorter: (a, b) => a.median_delivery_time - b.median_delivery_time,
        },

        {
            title: "mean_call",
            dataIndex: "mean_call",
            key: "mean_call",
            sorter: (a, b) => a.mean_call - b.mean_call,
        },
    ];
    return (
        <Layout>
            <Header></Header>
            <Select
                mode="multiple"
                // clearIcon={}
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
                bordered={true}
                style={{ margin: "0 50px", borderRadius: "50px" }}
                columns={columns}
                dataSource={formattedData}
                expandable={{
                    expandedRowRender: (record) => (
                        <div style={{ margin: 20 }}>
                            <CompanyGraphs
                                name={record.name}
                                bad={record.good_orders}
                                good={record.good_orders}
                                views={record.sum_views}
                                sales={record.median_sale}
                            ></CompanyGraphs>
                        </div>
                    ),
                }}
            />
            <SummaryGraphs></SummaryGraphs>
        </Layout>
    );
};

export default TableData;
