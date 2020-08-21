import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu } from "antd";

import "./header.scss";

const { Header } = Layout;

function HeaderNav(props) {
  const {
    routeprops: { location },
  } = props;

  return (
    <Header>
      <Row>
        <Col span={4}>
          <h1 className="header-title">peliHD</h1>
        </Col>
        <Col span={20}>
          <Menu
            theme="dark"
            selectedKeys={[location.pathname]}
            mode="horizontal"
            className="header-nav"
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/new-movies">
              <Link to="/new-movies">Latest Releases</Link>
            </Menu.Item>
            <Menu.Item key="/popular">
              <Link to="/popular">Popular</Link>
            </Menu.Item>
            <Menu.Item key="/search">
              <Link to="/search">Search</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderNav;
