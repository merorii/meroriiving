//base
import type { NextPage } from "next";

//libraries
import { useQuery } from "react-query";

//components
import { MainLayout, Carousel } from "../components";

//api
import { getMovieList } from "src/common/api/api";
import styled from "styled-components";

//style
const Title = styled.div`
  color: white;
  margin-left: 3vw;
`;

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
      <Carousel data={popular.results.slice(0, 4)} fade />
      <Title>현재 인기있는 영화</Title>
      <Carousel data={popular.results} />
      <Title>상위 랭킹 영화</Title>
      <Carousel data={topRated.results} />
    </MainLayout>
  );
};

export default Home;
