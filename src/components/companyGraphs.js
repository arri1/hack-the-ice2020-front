import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Typography, Skeleton } from 'antd';
import Validation from '../data/validation';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    Tooltip,
    XAxis,
    PieChart,
    YAxis,
    AreaChart,
    Area,
} from 'recharts';

const { Title } = Typography;

const formattedData = Object.entries(Validation.companies).map((item) => {
    const [key, value] = item;
    return { ...value, name: key };
});

const CompanyGraphs = ({ id }) => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [company, setCompany] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(
                `https://hack-the-ice2020-python-back.herokuapp.com/api/companies/${id}`
            )
            .then(({ data: { orders, products, company } }) => {
                setLoading(false);
                setOrders(orders);
                setProducts(products);
                setCompany(company);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, []);
    const piechart1 = [
        {
            name: 'успешные заказы',
            value: orders.reduce((total, obj) => obj.good + total, 0),
        },
        {
            name: 'сорванные заказы',
            value: orders.reduce((total, obj) => obj.bad + total, 0),
        },
    ];

    const COLORS = ['#395BEC', '#00BAFF'];
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
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <Row>
            <Skeleton loading={loading}>
                <div>
                    <Title
                        level={5}
                        style={{ marginLeft: '50px', textAlign: 'center' }}
                    >
                        Средняя цена товара и <br></br>средняя цена доставки
                    </Title>
                    <AreaChart
                        width={730}
                        height={250}
                        data={orders}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#00BAFF"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#00BAFF"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#395BEC"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#395BEC"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="delivery_cost"
                            stroke="#00BAFF"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                        <Area
                            type="monotone"
                            dataKey="delivery_time"
                            stroke="#395BEC"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </div>

                <div>
                    <Title level={5} style={{ textAlign: 'center' }}>
                        Соотношение сорванных и <br></br>успешных заказов
                    </Title>
                    <PieChart width={250} height={200}>
                        <Pie
                            data={piechart1}
                            dataKey="value"
                            cx={120}
                            cy={80}
                            outerRadius={70}
                            isAnimationActive={false}
                            labelLine={false}
                            label={renderCustomizedLabel}
                        >
                            {piechart1.map((entry, index) => (
                                <Cell fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend height={'0'} />
                    </PieChart>
                </div>
            </Skeleton>
        </Row>
    );
};

export default CompanyGraphs;
