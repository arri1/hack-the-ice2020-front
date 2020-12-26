import React from "react";
import { Row, Typography } from "antd";
import Validation from "../data/validation";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
    LineChart,
    Line,
} from "recharts";

const { Title } = Typography;

const formattedData = Object.entries(Validation.companies).map((item) => {
    const [key, value] = item;
    return { ...value, name: key };
});

const CompanyGraphs = ({ name, bad, good, views, sales }) => {
    const orders = [
        {
            "Название компании": name,
            "Кол-во выполненных заказов": good,
            "Кол-во сорванных заказов": bad,
        },
    ];
    const piechart1 = [
        { name: "Просмотры", value: views },
        { name: "Заказы", value: good * 1000 },
    ];
    const COLORS = ["#395BEC", "#00BAFF"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <Row>
            <div>
                <Title
                    level={5}
                    style={{ marginLeft: "50px", textAlign: "center" }}
                >
                    Средняя цена товара и <br></br>средняя цена доставки
                </Title>
                <LineChart
                    width={600}
                    height={230}
                    data={formattedData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip position={{ y: 0.0005250757465347217 }} />
                    <Line
                        type="monotone"
                        dataKey="mean_product_price"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="mean_cost_delivery"
                        stroke="#82ca9d"
                    />
                    <Legend />
                </LineChart>
            </div>
            <div>
                <Title
                    level={5}
                    style={{ marginLeft: "50px", textAlign: "center" }}
                >
                    Соотношение сорванных и <br></br>успешных заказов
                </Title>

                <BarChart width={300} height={250} data={orders}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Название компании" />
                    <YAxis />
                    <Bar dataKey="Кол-во сорванных заказов" fill="#8884d8" />
                    <Bar dataKey="Кол-во выполненных заказов" fill="#82ca9d" />
                    <Legend layout={"vertical"} />
                </BarChart>
            </div>
            <div>
                <Title level={5} style={{ textAlign: "center" }}>
                    Соотношение просмотренных и <br></br>купленных товаров
                </Title>
                <PieChart width={250} height={200}>
                    <Pie
                        data={piechart1}
                        dataKey={"value"}
                        cx={120}
                        cy={80}
                        // innerRadius={30}
                        outerRadius={70}
                        // paddingAngle={5}

                        isAnimationActive={false}
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {piechart1.map((entry, index) => (
                            <Cell fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend height={"0"} />
                </PieChart>
            </div>
        </Row>
    );
};

export default CompanyGraphs;
