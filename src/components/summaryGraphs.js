import React from "react";
import { Space, Row } from "antd";

import Validation from "../data/validation";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ComposedChart,
    Area,
    BarChart,
    Bar,
} from "recharts";

const formattedData = Object.entries(Validation.companies).map((item) => {
    const [key, value] = item;
    const result = { ...value, name: key };
    return result;
});
const chartData = formattedData.map((item) => {
    const result = {
        name: item.name,
        price: item.mean_product_price,
        rate: item.rate,
        sale: item.median_sale,
    };
    return result;
});
const SummaryGraphs = () => {
    return (
        <div>
            <Row>
                <LineChart width={650} height={400} data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
                </LineChart>

                <ComposedChart width={650} height={400} data={chartData}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="price"
                        fill="#8884d8"
                        stroke="#8884d8"
                    />
                    <Bar dataKey="sale" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="rate" stroke="#ff7300" />
                </ComposedChart>
            </Row>
            <BarChart
                width={1300}
                height={300}
                data={chartData}
                margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" stackId="a" fill="#8884d8" />
                <Bar dataKey="rate" stackId="a" fill="#82ca9d" />
                <Bar dataKey="sale" fill="#ffc658" />
            </BarChart>
        </div>
    );
};

export default SummaryGraphs;
