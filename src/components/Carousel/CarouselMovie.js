import React from "react";

import { Carousel, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Loading from "../Loading";

import "./carrousel.scss";

export default function CarouselMovie(props) {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  // console.log(props.movie);
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h1 className="title">{title}</h1>
          <p className="description">{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button
              type="primary"
              className="btn"
              icon={<PlayCircleOutlined />}
            >
              Ver mas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
