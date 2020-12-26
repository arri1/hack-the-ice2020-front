import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import {Input, Menu, Tabs} from 'antd';

const {TabPane} = Tabs;
const {SubMenu} = Menu;
const {Search} = Input;
const Container = styled.div``;
const Home = () => {
    return (
        <Container>
            <Header primary/>

            <Tabs defaultActiveKey="1">
                {[...Array.from({length: 15}, (v, i) => i)].map((i) => (
                    <TabPane
                        tab={`Tab-${i}`}
                        key={i}
                        disabled={i === 28}
                    />
                ))}
            </Tabs>
            <Menu
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title="Navigation One">
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>

                <Search
                    placeholder="input search text"
                    style={{width: 200, margin: '0 20px'}}
                />
            </Menu>
        </Container>
    );
};

export default Home;
