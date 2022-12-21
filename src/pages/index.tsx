//base
import type { NextPage } from "next";

//libraries
import { useQuery } from "react-query";

//components
import { MainLayout, Carousel } from "../components";

//api
import { getMovieList } from "src/common/api/api";

//component

const Home: NextPage = () => {
  const { isLoading: popularLoading, data: popular } = useQuery("popular", () =>
    getMovieList("popular")
  );

  const { isLoading: topRatedLoading, data: topRated } = useQuery(
    "top_rated",
    () => getMovieList("top_rated")
  );

  if (popularLoading || topRatedLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div>popular</div>
      <Carousel data={popular.results} />
      <div>top rated</div>
      <Carousel data={topRated.results} />
    </MainLayout>
  );
};

export default Home;
