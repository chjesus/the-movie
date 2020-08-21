import React from "react";
import { Route } from "react-router-dom";

import HeaderNav from "../components/Header";

// import { Container } from './styles';

function AppRoute(props) {
  const { component: Component, path, exact } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        <Component routeprops={routeProps}>
          <HeaderNav routeprops={routeProps} />
        </Component>
      )}
    />
  );
}

export default AppRoute;
