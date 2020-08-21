import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination, Card } from "antd";

import Loading from "../Loading";

import "./movielist.scss";

const { Meta } = Card;

function MovieList(props) {
  const { setpage, upcoming } = props;
  const { result, loading } = upcoming;

  if (loading) {
    return (
      <Row>
        <Col span={24}>
          <Loading />
        </Col>
        <Col span={24}>
          <PaginationRender total={0} setpage={setpage} />
        </Col>
      </Row>
    );
  }

  return (
    <Row className="upcoming-list">
      <Col
        span={24}
        style={{
          width: "100%",
        }}
      >
        <Row gutter={16}>
          {result.results.map((movie, index) => (
            <Col span={6} key={index} style={{ margin: "10px 0" }}>
              {movie.poster_path && (
                <Card
                  hoverable
                  cover={
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        alt="s"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          movie.poster_path
                        }
                        style={{ height: "340px", width: "100%" }}
                      />
                    </Link>
                  }
                >
                  <Meta title={movie.title} style={{ textAlign: "center" }} />
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Col>
      <PaginationRender total={result.total_pages} setpage={setpage} />
    </Row>
  );
}

function PaginationRender(props) {
  const { setpage, total } = props;
  return (
    <Col span={24} className="upcoming-list-pagination">
      <Pagination
        defaultCurrent={1}
        total={total * 10}
        onChange={(pagination) => setpage(pagination)}
      ></Pagination>
    </Col>
  );
}
export default MovieList;
