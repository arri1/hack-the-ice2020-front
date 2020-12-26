import React from 'react';
import {Avatar, Row, Space, Typography} from 'antd';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background: ${(props) => (props.primary ? '#395bec' : 'white')};
    padding: 5px 20px;
    width: 100%;
`;
const {Title} = Typography;
const Header = () => {
    return (
        <StyledHeader primary>
            <Row>
                <Space align="center">
                    <Avatar size={50} src="/images/Group_1.png"/>
                    <Title level={3} style={{color: 'white', margin: '0'}}>
                        АЭБ
                    </Title>
                </Space>
            </Row>
        </StyledHeader>
    );
};

export default Header;
