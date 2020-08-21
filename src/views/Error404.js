import React from "react";

import { Layout } from "antd";

const { Content } = Layout;
// import { Container } from './styles';

function Error404(props) {
  const { children } = props;
  return (
    <Layout>
      {children}
      <Content>
        <h1>App Error404</h1>
      </Content>
    </Layout>
  );
}

export default Error404;
