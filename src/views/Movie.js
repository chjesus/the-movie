import React, { useState } from "react";
import { Layout, Row, Col, Button } from "antd";

import Loading from "../components/Loading";
import ModalVideo from "../components/ModalVideo";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";

import "./scss/movie.scss";

const { Content } = Layout;

export default function Movie(props) {
  const { children, routeprops } = props;
  const { match } = routeprops;
  const {
    params: { id },
  } = match;

  const movie = useFetch(`${URL_API}movie/${id}?api_key=${API}&language=en-US`);

  if (movie.loading || !movie.result) {
    return <Loading />;
  }

  const { backdrop_path, poster_path } = movie.result;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <Layout>
      {children}
      <Content>
        <div
          className="movie"
          style={{ backgroundImage: `url(${backdropPath})` }}
        >
          <Row>
            <Col span={5} offset={3} className="movie__poster">
              <img src={posterPath} alt="img" />
            </Col>
            <Col span={13} className="movie__info">
              <MovieInfo movieResult={movie.result} />
              <MovieDescription movieResult={movie.result} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

function MovieInfo(props) {
  const {
    movieResult: { id, title, release_date },
  } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const videoMovie = useFetch(
    `${URL_API}movie/${id}/videos?api_key=${API}&language=en-US`
  );

  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <React.Fragment>
            <Button type="primary" onClick={openModal}>
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </React.Fragment>
        );
      }
    }
  };
  return (
    <div className="movie__info-header">
      <h1>
        {title}
        <span>{release_date}</span>
      </h1>
      {renderVideo()}
    </div>
  );
}

function MovieDescription(props) {
  const {
    movieResult: { overview, genres },
  } = props;

  return (
    <div className="movie__info-content">
      <h3>Synopsis</h3>
      <p>{overview}</p>
      <h3>Genders</h3>
      <ul>
        {genres.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}
