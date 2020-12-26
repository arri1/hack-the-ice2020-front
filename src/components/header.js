import React from "react";
import { Header as antHeader, Avatar, Row, Typography, Space } from "antd";
import styled from "styled-components";

const StyledHeader = styled.div`
    background: #395bec;
    padding: 5px 20px;
    width: 100%;
`;
const { Title } = Typography;
const Header = () => {
    return (
        <StyledHeader>
            <Row>
                <Space align="center">
                    <Avatar size={50} src="/images/Group_1.png" />
                    <Title level={3} style={{ color: "white", margin: "0" }}>
                        АЭБ
                    </Title>
                </Space>
            </Row>
        </StyledHeader>
    );
};

export default Header;
