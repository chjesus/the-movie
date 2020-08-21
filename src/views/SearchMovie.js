import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Input } from "antd";
import queryString from "query-string";
import MovieCatalog from "../components/MovieCatalog";

import { URL_API, API } from "../utils/constants";

import "./scss/searchmovie.scss";

const { Content } = Layout;

function SearchMovie(props) {
  const { children, routeprops } = props;
  const { history, location } = routeprops;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      if (s) {
        const response = await fetch(
          `${URL_API}search/movie?api_key=${API}&language=en-US&query=${s}&page=1`
        );
        const movies = await response.json();
        setSearchValue(s);
        setMovieList(movies);
      }
    })();
  }, [location.search, searchValue]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Layout>
      {children}
      <Content>
        <Row>
          <Col span={12} offset={6} className="search">
            <h1>Buscar Pelicula</h1>
            <Input value={searchValue} onChange={onChangeSearch} />
          </Col>
        </Row>
        <Row>{movieList.results && <MovieCatalog movies={movieList} />}</Row>
      </Content>
    </Layout>
  );
}

export default SearchMovie;
