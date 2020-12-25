import React from "react";
import styled from "styled-components";
import { Table, Button, Tag, Space } from "antd";
import Validation from "./data/validation";

const TableData = () => {
    return <Table columns={columns} dataSource={data} />;
};

export default TableData;
