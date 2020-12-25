import React, { useState } from "react";
import styled from "styled-components";
import {
    Card,
    Col,
    Row,
    Statistic,
    Avatar,
    Space,
    Typography,
    Divider,
    Badge,
} from "antd";
import {
    UserOutlined,
    CheckCircleOutlined,
    CrownOutlined,
    StarFilled,
} from "@ant-design/icons";

const CardContainer = styled.div``;
const { Title, Text } = Typography;

const Sellers = () => {
    const [size, setSize] = useState("large");
    return (
        <CardContainer>
            <Card title="Seller's info" bordered={true} style={{ width: 350 }}>
                <Row>
                    <Space size={size}>
                        <Avatar size={64} icon={<UserOutlined />} value="100" />
                        <div>
                            <Title level={4}>Name Surname</Title>

                            <Row>
                                <Space size={"small"}>
                                    <Row>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                    </Row>
                                    <Space size={"small"}>
                                        <Badge
                                            count={69}
                                            style={{
                                                backgroundColor: "#52c41a",
                                            }}
                                        />
                                        <Badge
                                            count={99}
                                            style={{
                                                backgroundColor: "purple",
                                            }}
                                        />
                                    </Space>
                                </Space>
                            </Row>
                        </div>
                    </Space>
                </Row>
                <Divider orientation="left">Statistics</Divider>

                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic
                            title="Rating"
                            value={999}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title="Reputation"
                            value={99}
                            suffix="/ 100"
                            prefix={<CrownOutlined />}
                        />
                    </Col>
                </Row>
                <Divider />
                <p>
                    <Text strong>90%</Text> response rate
                </p>
                <p>
                    <Text strong>99+</Text> on time delivery
                </p>
                <p>
                    <Text strong>87-90</Text> еще что-то
                </p>
            </Card>
        </CardContainer>
    );
};

export default Sellers;
