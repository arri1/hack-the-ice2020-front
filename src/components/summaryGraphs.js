import React from 'react';
import {Row, Typography} from 'antd';

import {Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis,} from 'recharts';

const {Title} = Typography;
const SummaryGraphs = ({data: formattedData}) => {
    return (
        <div style={{marginLeft: '30px'}}>
            <Row>
                <div>
                    <Title
                        level={5}
                        style={{marginLeft: '50px', textAlign: 'center'}}
                    >
                        Средняя цена товара <br></br>топ 10 компаниий
                    </Title>

                    <ComposedChart
                        width={650}
                        height={400}
                        data={formattedData}
                        margin={{top: 20, right: 20, bottom: 20, left: 20}}
                    >
                        <CartesianGrid stroke="#f5f5f5"/>
                        <XAxis dataKey="company"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar
                            dataKey="mean_product_price"
                            barSize={20}
                            fill="#395BEC"
                        />
                        <Line
                            type="monotone"
                            dataKey="mean_product_price"
                            stroke="#00BAFF"
                        />
                    </ComposedChart>
                </div>
                <div>
                    <Title
                        level={5}
                        style={{marginLeft: '50px', textAlign: 'center'}}
                    >
                        Количество товаров, время онлайн<br></br>и медианная
                        скидка топ 10 компаниий
                    </Title>
                    <ComposedChart
                        width={650}
                        height={400}
                        data={formattedData}
                    >
                        <CartesianGrid stroke="#f5f5f5"/>
                        <XAxis dataKey="company"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Area
                            type="monotone"
                            dataKey="median_sale"
                            fill="#8884d8"
                            stroke="#8884d8"
                        />
                        <Bar
                            dataKey="days_online"
                            barSize={20}
                            fill="#413ea0"
                        />
                        <Line
                            type="monotone"
                            dataKey="count_products"
                            stroke="#ff7300"
                        />
                    </ComposedChart>
                </div>
            </Row>
            <div style={{marginTop: '30px'}}>
                <Title
                    level={5}
                    style={{marginLeft: '50px', textAlign: 'center'}}
                >
                    Успешные/сорванные заказы <br></br> и кол-во товаров топ 10
                    компаниий
                </Title>
                <BarChart
                    width={1350}
                    height={300}
                    data={formattedData}
                    margin={{top: 20, right: 50, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="company"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="good_orders" stackId="a" fill="#395BEC"/>
                    <Bar dataKey="bad_orders" stackId="a" fill="#00BAFF"/>
                    <Bar dataKey="count_products" fill="#413ea0"/>
                </BarChart>
            </div>
        </div>
    );
};

export default SummaryGraphs;
