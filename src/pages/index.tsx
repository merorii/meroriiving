//base
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//components
import { MainLayout, Carousel } from "../components";

//type
import { TypeProps, HomePageProps } from "src/types";

//api
import { getMovieList } from "src/common/api";
import { menuName } from "src/common/util";

const Home: NextPage<HomePageProps> = (props) => {
  const { popular, topRated, nowPlaying, upcoming } = props;
  const types: TypeProps = {
    popular: popular,
    top_rated: topRated,
    now_playing: nowPlaying,
    upcoming: upcoming,
  };

  return (
    <MainLayout>
      <Carousel data={popular.slice(0, 4)} fade />
      <section className="section__main-lists">
        {Object.keys(types).map((type) => (
          <section key={type} className="section__carousel-lists">
            <h2>{menuName(type)} 영화</h2>
            <p className="btn-all">
              <Link href={`/list/${type}`}>전체보기</Link>
            </p>
            <Carousel data={types[type]} />
          </section>
        ))}
      </section>
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
