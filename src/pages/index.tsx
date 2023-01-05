//base
import type { GetServerSideProps, NextPage } from "next";

//components
import { MainLayout, Carousel } from "../components";

//api
import { getMovieList } from "src/common/api";
import Link from "next/link";

const Home: NextPage = (props: any) => {
  const { popular, topRated, nowPlaying, upcoming } = props;

  return (
    <MainLayout>
      <section>
        <Carousel data={popular.slice(0, 4)} fade />
      </section>
      <section className="main-section">
        <section className="list-section">
          <h2>현재 인기있는 영화</h2>
          <p className="btn-all">
            <Link href={`/list/popular`}>전체보기</Link>
          </p>
          <Carousel data={popular} />
        </section>
        <section className="list-section">
          <h2>상위 랭킹 영화</h2>
          <p className="btn-all">
            <Link href={`/list/top_rated`}>전체보기</Link>
          </p>
          <Carousel data={topRated} />
        </section>
        <section className="list-section">
          <h2>상영중인 영화</h2>
          <p className="btn-all">
            <Link href={`/list/now_playing`}>전체보기</Link>
          </p>
          <Carousel data={nowPlaying} />
        </section>
        <section className="list-section">
          <h2>개봉 예정 영화</h2>
          <p className="btn-all">
            <Link href={`/list/upcoming`}>전체보기</Link>
          </p>
          <Carousel data={upcoming} />
        </section>
      </section>
      <div style={{ color: "white" }}>푸터</div>
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const popular = await getMovieList("popular");
  const topRated = await getMovieList("top_rated");
  const nowPlaying = await getMovieList("now_playing");
  const upcoming = await getMovieList("upcoming");

  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      nowPlaying: nowPlaying.results,
      upcoming: upcoming.results,
    },
  };
};
