import React from 'react';
import { Row, Typography } from 'antd';
import Dimensions from 'react-dimensions';
import {
    Area,
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const { Title } = Typography;
const SummaryGraphs = ({ containerWidth, data }) => {
    return (
        <div style={{ marginLeft: '30px' }}>
            <Row>
                <div>
                    <Title
                        level={5}
                        style={{ marginLeft: '50px', textAlign: 'center' }}
                    >
                        Средняя цена товара <br></br>топ 10 компаниий
                    </Title>

                    <ComposedChart
                        width={containerWidth < 570 ? containerWidth - 80 : 650}
                        height={400}
                        data={data}
                        margin={{ top: 20, bottom: 20 }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="company" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="mean_product_price"
                            name="Средняя цена товара"
                            barSize={20}
                            fill="#395BEC"
                        />
                        <Line
                            type="monotone"
                            dataKey="mean_product_price"
                            name="Средняя цена товара"
                            stroke="#00BAFF"
                        />
                    </ComposedChart>
                </div>
                <div>
                    <Title
                        level={5}
                        style={{ marginLeft: '50px', textAlign: 'center' }}
                    >
                        Количество товаров, время онлайн<br></br>и медианная
                        скидка топ 10 компаниий
                    </Title>
                    <ComposedChart
                        width={containerWidth < 570 ? containerWidth - 80 : 650}
                        height={400}
                        data={data}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="company" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="median_sale"
                            name="Медианная скидка"
                            fill="#8884d8"
                            stroke="#8884d8"
                        />
                        <Bar
                            dataKey="days_online"
                            name="Кол-во дней на сайте"
                            barSize={20}
                            fill="#413ea0"
                        />
                        <Line
                            type="monotone"
                            dataKey="count_products"
                            name="Кол-во товара"
                            stroke="#ff7300"
                        />
                    </ComposedChart>
                </div>
            </Row>
            <div style={{ marginTop: '30px' }}>
                <Title
                    level={5}
                    style={{ marginLeft: '50px', textAlign: 'center' }}
                >
                    Успешные/сорванные заказы <br></br> и кол-во товаров топ 10
                    компаниий
                </Title>
                <BarChart
                    data={data}
                    width={containerWidth - 80}
                    height={300}
                    margin={{ top: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="company" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="good_orders"
                        name="Кол-во сорванных заказов"
                        stackId="a"
                        fill="#395BEC"
                    />
                    <Bar
                        dataKey="bad_orders"
                        name="Кол-во выполненных заказов"
                        stackId="a"
                        fill="#00BAFF"
                    />
                    <Bar
                        dataKey="count_products"
                        name="Кол-во товара"
                        fill="#413ea0"
                    />
                </BarChart>
            </div>
        </div>
    );
};

export default Dimensions()(SummaryGraphs);
