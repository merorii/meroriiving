//base
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

//components
import { Carousel } from "src/components";

//layout
import { MainLayout } from "src/layout";

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
          <Carousel
            key={type}
            data={types[type]}
            title={`${menuName(type)} 영화`}
            viewAll={{ status: true, type }}
          />
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
