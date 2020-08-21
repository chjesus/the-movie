import React, { useState } from "react";

import useFetch from "../hooks/useFetch";
import CarouselMovie from "../components/Carousel";
import MovieList from "../components/MovieList";
import { URL_API, API } from "../utils/constants";

import { Layout } from "antd";

const { Content } = Layout;

function Home(props) {
  const { children } = props;
  const [page, setPage] = useState(1);

  const newMovies = useFetch(
    `${URL_API}movie/now_playing?api_key=${API}&language=en-US&page=1`
  );
  const upComing = useFetch(
    `${URL_API}movie/upcoming?api_key=${API}&language=en-US&page=${page}`
  );

  return (
    <Layout>
      {children}
      <Content>
        <CarouselMovie movies={newMovies} />
        <MovieList upcoming={upComing} setpage={setPage} />
      </Content>
    </Layout>
  );
}

export default Home;
