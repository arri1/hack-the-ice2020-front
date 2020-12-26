import React, { useState } from "react";
import { Table, Select, Row, Layout } from "antd";
import Validation from "./validation";
import Graphs from "../components/graphs";
import Header from "../components/header";

const { Footer, Sider, Content } = Layout;
const { Option } = Select;
const options = [
    "verification",
    "days_online",
    "own",
    "median_delivery_time",
    "mean_product_price",
    "good_orders",
    "bad_orders",
    "mean_feedback",
    "mean_call",
    "mean_cost_delivery",
    "count_products",
    "median_sale",
    "sum_views",
    "part_good_order",
    "part_orders_of_online",
    "part_orders_of_views",
    "rate",
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

const TableData = () => {
    const [showColumns, setShowColumns] = useState(false);
    function handleChange(value) {
        setShowColumns(true);
        console.log(showColumns);
        console.log(`selected ${value}`);
    }

    const columns = [
        {
            title: "{<a>name</a>",
            dataIndex: "name",
            key: "name",
            fixed: "left",

            // className: showResults ? "hide" : "",
        },
        {
            title: "verification",
            className: showColumns ? "hidden" : "",
            dataIndex: "verification",
            key: "verification",
            filters: [
                {
                    text: "1",
                    value: 1,
                },
                {
                    text: "0",
                    value: 0,
                },
            ],
            sorter: (a, b) => a.verification - b.verification,
        },
        {
            title: "days_online",
            // className: showColumns ? "hidden" : "",
            dataIndex: "days_online",
            key: "days_online",
            sorter: (a, b) => a.days_online - b.days_online,
        },
        {
            title: "own",
            // className: showColumns ? "hidden" : "",
            dataIndex: "own",
            key: "own",
            sorter: (a, b) => a.own - b.own,
        },
        {
            title: "median_delivery_time",
            // className: showColumns ? "hidden" : "",
            dataIndex: "median_delivery_time",
            key: "median_delivery_time",
            sorter: (a, b) => a.median_delivery_time - b.median_delivery_time,
        },
        {
            title: "mean_product_price",
            dataIndex: "mean_product_price",
            key: "mean_product_price",
            sorter: (a, b) => a.mean_product_price - b.mean_product_price,
        },
        {
            title: "good_orders",
            dataIndex: "good_orders",
            key: "good_orders",
            sorter: (a, b) => a.good_orders - b.good_orders,
        },
        {
            title: "bad_orders",
            dataIndex: "bad_orders",
            key: "bad_orders",
            sorter: (a, b) => a.bad_orders - b.bad_orders,
        },
        {
            title: "mean_feedback",
            dataIndex: "mean_feedback",
            key: "mean_feedback",
            sorter: (a, b) => a.mean_feedback - b.mean_feedback,
        },
        {
            title: "median_delivery_time",
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
        {
            title: "mean_cost_delivery",
            dataIndex: "mean_cost_delivery",
            key: "mean_cost_delivery",
            sorter: (a, b) => a.mean_cost_delivery - b.mean_cost_delivery,
        },
        {
            title: "count_products",
            dataIndex: "count_products",
            key: "count_products",
            sorter: (a, b) => a.count_products - b.count_products,
        },
        {
            title: "median_sale",
            dataIndex: "median_sale",
            key: "median_sale",
            sorter: (a, b) => a.median_sale - b.median_sale,
        },

        {
            title: "sum_views",
            dataIndex: "sum_views",
            key: "sum_views",
            sorter: (a, b) => a.sum_views - b.sum_views,
        },
        {
            title: "part_good_order",
            dataIndex: "part_good_order",
            key: "part_good_order",
            sorter: (a, b) => a.part_good_order - b.part_good_order,
        },
        {
            title: "part_orders_of_online",
            dataIndex: "part_orders_of_online",
            key: "part_orders_of_online",
            sorter: (a, b) => a.part_orders_of_online - b.part_orders_of_online,
        },
        {
            title: "part_orders_of_views",
            dataIndex: "part_orders_of_views",
            key: "part_orders_of_views",
            sorter: (a, b) => a.part_orders_of_views - b.part_orders_of_views,
        },
        {
            title: "rate",
            dataIndex: "rate",
            key: "rate",
            sorter: (a, b) => a.rate - b.rate,
        },
    ];
    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Content>
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
                        bordered={true}
                        style={{ margin: "0 50px", borderRadius: "50px" }}
                        columns={columns}
                        dataSource={formattedData}
                        expandable={{
                            expandedRowRender: (record) => (
                                <p style={{ margin: 0 }}>{<Graphs></Graphs>}</p>
                            ),
                            rowExpandable: (record) =>
                                record.name !== "Not Expandable",
                        }}
                    ></Table>
                </Content>
            </Layout>
            <Graphs></Graphs>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default TableData;
