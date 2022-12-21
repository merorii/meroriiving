//base
import type { NextPage } from "next";

//libraries
import { useQuery } from "react-query";

//components
import { MainLayout } from "../components";

//api
import { getMovieList } from "src/common/api/api";
import { imageUrl } from "src/common/api/util";

//style
import { Card, Poster, PosterList } from "styles/mainPage";
import { movieResult } from "src/type/main";
import Link from "next/link";

const Home: NextPage = () => {
  const { isLoading: popularLoading, data: popular } = useQuery(
    "movieData",
    () => getMovieList("popular")
  );

  if (popularLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <PosterList>
        {popular?.results.map((result: movieResult) => {
          const { id, poster_path, title } = result;
          return (
            <Card key={id}>
              <Link href={`/detail/${id}`}>
                <Poster posterUrl={imageUrl(poster_path)} />
                <div>{title}</div>
              </Link>
            </Card>
          );
        })}
      </PosterList>
    </MainLayout>
  );
};

export default Home;
