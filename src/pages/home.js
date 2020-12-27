import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';

import { Input, Menu, Tabs, Card, Button, Row, Image, Typography } from 'antd';

const { Meta } = Card;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(196, 196, 196, 0.2);
    height: 100vh;
`;

const Home = () => {
    return (
        <Container>
            <Header primary />
            <div>
                <Row gutter={16}>
                    <div className="site-card-border-less-wrapper">
                        <Card
                            title="Card title"
                            bordered={false}
                            style={{ width: 300 }}
                            actions={[
                                <Button type="primary">
                                    Добавить в корзину
                                </Button>,
                            ]}
                        >
                            <Image
                                width={'100%'}
                                src="error"
                                fallback="https://hack-the-ice2020-python-back.herokuapp.com/api/companies/category/1?page=0&per_page=10&sort_by=rate&is_descending=1&chosen_chars=%5B%22verification%22%2C%20%22days_online%22%2C%20%22own%22%2C%20%22median_delivery_time%22%2C%22mean_product_price%22%2C%22good_orders%22%2C%20%22bad_orders%22%2C%22mean_feedback%22%2C%20%22mean_call%22%2C%20%22mean_cost_delivery%22%2C%22count_products%22%2C%20%22median_sale%22%2C%20%22sum_views%22%5D"
                            />
                            <Meta
                                style={{ marginTop: '20px' }}
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default Home;
