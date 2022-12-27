//base
import type { NextPage } from "next";

//libraries
import { useQuery } from "react-query";

//components
import { MainLayout, Carousel } from "../components";

//api
import { getMovieList } from "src/common/api/api";

const Home: NextPage = () => {
  const { isLoading: popularLoading, data: popular } = useQuery("popular", () =>
    getMovieList("popular")
  );

  const { isLoading: topRatedLoading, data: topRated } = useQuery(
    "top_rated",
    () => getMovieList("top_rated")
  );

  const { isLoading: nowPlayingLoading, data: nowPlaying } = useQuery(
    "now_playing",
    () => getMovieList("now_playing")
  );

  const { isLoading: upcomingLoading, data: upcoming } = useQuery(
    "upcoming",
    () => getMovieList("upcoming")
  );

  if (
    popularLoading ||
    topRatedLoading ||
    upcomingLoading ||
    nowPlayingLoading
  ) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <section>
        <Carousel data={popular.results.slice(0, 4)} fade />
      </section>
      <section className="main-section">
        <section className="list-section">
          <h2>현재 인기있는 영화</h2>
          <Carousel data={popular.results} />
        </section>
        <section className="list-section">
          <h2>상위 랭킹 영화</h2>
          <Carousel data={topRated.results} />
        </section>
        <section className="list-section">
          <h2>상영중인 영화</h2>
          <Carousel data={nowPlaying.results} />
        </section>
        <section className="list-section">
          <h2>개봉 예정 영화</h2>
          <Carousel data={upcoming.results} />
        </section>
      </section>
      <div style={{ color: "white" }}>푸터</div>
    </MainLayout>
  );
};

export default Home;
