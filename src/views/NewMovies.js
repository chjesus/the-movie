import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";

import { URL_API, API } from "../utils/constants";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

function NewMovies(props) {
  const { children } = props;
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}movie/now_playing?api_key=${API}&lenguage=en-US&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  return (
    <Layout>
      {children}
      <Content>
        <Row gutter={16} style={{ padding: "25px 50px", margin: 0 }}>
          <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
            <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
              Latest Releases
            </h1>
          </Col>
          {movieList.results ? (
            <MovieCatalog movies={movieList} />
          ) : (
            <Col span="24">
              <Loading />
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
}

export default NewMovies;
