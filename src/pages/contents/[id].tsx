import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMovieInfo, getSimilar } from "src/common/api/api";
import { country, imageUrl } from "src/common/api/util";
import { Carousel, MainLayout } from "src/components";
import { movieListResult, movieResult } from "src/type/main";

interface ContentNextProps {
  params: any;
  content: movieResult;
  similar: movieListResult;
}

const Contents: NextPage = (props: any) => {
  const { params, content, similar } = props;
  const { isLoading, data } = useQuery(
    `contents_${params.id}`,
    () => {
      return getMovieInfo(params.id);
    },
    { initialData: content }
  );

  const { isLoading: similarLoading, data: similarData } = useQuery(
    `similar_${params.id}`,
    () => {
      return getSimilar(params.id);
    },
    { initialData: similar }
  );

  if (isLoading || similarLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <Image
        src={imageUrl(data.backdrop_path)}
        alt=""
        fill
        priority
        className="contents__background"
      />
      <section className="contents__section">
        <div className="contents__text">
          <div className="contents-title">{data.title}</div>
          <div className="contents-original-title">{data.original_title}</div>
          <div className="contents-tag">
            {data.adult && <p>19+</p>}
            <p className="contents-date">{data.release_date.split("-")[0]}</p>
            {data.production_countries[0] && (
              <p>{country(data.production_countries[0].iso_3166_1)}</p>
            )}
            <p>{data.runtime}분</p>
            {data.genres &&
              data.genres.map((genre: any) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
          </div>
          <div>⭐ {data.vote_average.toFixed(2)}</div>
          <div className="contents-company">
            <p>제작</p>
            {data.production_companies.map((company: any) => (
              <p key={company.id}>{company.name}</p>
            ))}
          </div>
          {data.tagline && <div>{data.tagline}</div>}
          <div>{data.overview}</div>
        </div>
        <div className="contents__poster">
          <Image src={imageUrl(data.poster_path)} alt="" fill sizes="10vw" />
        </div>
      </section>
      <section className="list-section">
        <h2>비슷한 영화</h2>
        <Carousel data={similarData.results}></Carousel>
      </section>
    </MainLayout>
  );
};

export default Contents;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contentData = await getMovieInfo(params && params.id);
  const similarData = await getSimilar(params && params.id);

  return {
    props: {
      params,
      content: contentData,
      similar: similarData,
    },
  };
};
