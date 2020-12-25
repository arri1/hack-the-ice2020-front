import React from "react";
import styled from "styled-components";
import { Table, Button, Tag, Space } from "antd";
import Validation from "./validation";

const columns = [
    {
        title: "verification",
        dataIndex: "verification",
        key: "verification",
    },
    {
        title: "days_online",
        dataIndex: "days_online",
        key: "days_online",
    },
    {
        title: "own",
        dataIndex: "own",
        key: "own",
    },
    {
        title: "median_delivery_time",
        dataIndex: "median_delivery_time",
        key: "median_delivery_time",
    },
    {
        title: "mean_product_price",
        dataIndex: "mean_product_price",
        key: "mean_product_price",
    },
    {
        title: "good_orders",
        dataIndex: "good_orders",
        key: "good_orders",
    },
    {
        title: "bad_orders",
        dataIndex: "bad_orders",
        key: "bad_orders",
    },
    {
        title: "mean_feedback",
        dataIndex: "mean_feedback",
        key: "mean_feedback",
    },
    {
        title: "median_delivery_time",
        dataIndex: "median_delivery_time",
        key: "median_delivery_time",
    },
    {
        title: "mean_call",
        dataIndex: "mean_call",
        key: "mean_call",
    },
    {
        title: "mean_cost_delivery",
        dataIndex: "mean_cost_delivery",
        key: "mean_cost_delivery",
    },
    {
        title: "count_products",
        dataIndex: "count_products",
        key: "count_products",
    },
    {
        title: "median_sale",
        dataIndex: "median_sale",
        key: "median_sale",
    },
    {
        title: "sum_views",
        dataIndex: "sum_views",
        key: "sum_views",
    },
    {
        title: "part_good_order",
        dataIndex: "part_good_order",
        key: "part_good_order",
    },
    {
        title: "part_orders_of_online",
        dataIndex: "part_orders_of_online",
        key: "part_orders_of_online",
    },
    {
        title: "part_orders_of_views",
        dataIndex: "part_orders_of_views",
        key: "part_orders_of_views",
    },
    {
        title: "rate",
        dataIndex: "rate",
        key: "rate",
    },
];
const data = [
    {
        verification: 0,
        days_online: 0.0025406187915763255,
        own: 0,
        median_delivery_time: 9.009286494951509e-5,
        mean_product_price: 0.0882305294698953,
        good_orders: 0.0008108357845456358,
        bad_orders: 0.0011171515253739872,
        mean_feedback: 5.4224116848119364e-5,
        mean_call: 4.7993395346937946e-5,
        mean_cost_delivery: 0.009514480130182435,
        count_products: 0.0018198758719802047,
        median_sale: 0.0003964086057778664,
        sum_views: 0.996048696308849,
        part_good_order: 7.577904528463886e-6,
        part_orders_of_online: 1.3673668864678177e-5,
        part_orders_of_views: 3.487739123210664e-8,
        rate: 0.10017489090576477,
    },
    {
        verification: 0,
        days_online: 0.0025406187915763255,
        own: 0,
        median_delivery_time: 9.009286494951509e-5,
        mean_product_price: 0.0882305294698953,
        good_orders: 0.0008108357845456358,
        bad_orders: 0.0011171515253739872,
        mean_feedback: 5.4224116848119364e-5,
        mean_call: 4.7993395346937946e-5,
        mean_cost_delivery: 0.009514480130182435,
        count_products: 0.0018198758719802047,
        median_sale: 0.0003964086057778664,
        sum_views: 0.996048696308849,
        part_good_order: 7.577904528463886e-6,
        part_orders_of_online: 1.3673668864678177e-5,
        part_orders_of_views: 3.487739123210664e-8,
        rate: 0.10017489090576477,
    },
];

const TableData = () => {
    const someData = Object.keys(Validation).map((key) => ({
        [key]: Validation[key],
    }));
    console.log(someData);

    console.log(someData);
    // const someData = Validation.companies.map()
    return (
        <Table data={someData} columns={columns}>
            {/* <Table.Column dataIndex={"rate"} key={"rate"} title={"rate"} /> */}
        </Table>
    );
};

export default TableData;
