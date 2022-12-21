import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useQuery } from "react-query";
import { getMovieInfo, getSimilar } from "src/common/api/api";
import { imageUrl } from "src/common/api/util";
import { MainLayout } from "src/components";

const Detail: NextPage = ({ params }: any) => {
  const { isLoading, data } = useQuery("movie", () => {
    return getMovieInfo(params.id);
  });

  const { isLoading: a, data: similarData } = useQuery("similar", () => {
    return getSimilar(params.id);
  });

  console.log(similarData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div>상세페이지</div>
      <Image src={imageUrl(data.poster_path)} alt="" width={270} height={410} />
      <Image
        src={imageUrl(data.backdrop_path)}
        alt=""
        width={270}
        height={410}
      />
      <div>{data.title}</div>
      <div>{data.adult && "19+"}</div>
      <div>{data.status === "Released" ? "상영중" : "상영종료"}</div>
      <div>{data.released_date}</div>
      <div>{data.vote_average}</div>
      <div>{data.runtime}</div>
      {/* <div>{data.production_companies[1].name}</div> */}
      {/* <div>{data.production_countries[0].name}</div> */}
      {data.genres.map((genre: any) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
      <div>{data.overview}</div>
    </MainLayout>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
