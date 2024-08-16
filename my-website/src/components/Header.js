import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: #001529;
  font-family: "Arial", sans-serif;
  font-size: 16px;

  .ant-menu-item {
    font-size: 16px;
    &:hover {
      background-color: #ffa500 !important; /* Оранжевый фон при наведении */
    }
  }

  .ant-menu-item-selected {
    background-color: #ff7f00 !important; /* Оранжевый фон для активного элемента */
  }
`;

const AppHeader = () => {
  return (
    <StyledHeader>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Головна</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/todo">TODO</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/swapi">SWAPI</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};

export default AppHeader;
