//base
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

//components
import { Carousel } from "src/components";

//layout
import { MainLayout } from "src/layout";

//type
import { genre, ContentPageProps, crew } from "src/types";

//common
import {
  getRecommendations,
  getCredits,
  getMovieInfo,
  getSimilar,
} from "src/common/api";
import { country, imageUrl } from "src/common/util";

const Contents: NextPage<ContentPageProps> = (props) => {
  const { content, similar, recommend } = props;
  const [overviewStatus, setOverviewStatus] = useState(false);
  {
    console.log(content);
  }

  return (
    <MainLayout>
      <div className="contents-background">
        {content.backdrop_path && (
          <Image src={imageUrl(content.backdrop_path)} alt="" fill priority />
        )}
      </div>
      <section className="section__content">
        <div className="contents__text">
          <div className="contents-title">{content.title}</div>
          <div className="contents-original-title">
            {content.original_title}
          </div>
          <div className="contents-tag">
            {content.adult && <p>19+</p>}
            <p className="contents-date">
              {content.release_date.split("-")[0]}
            </p>
            {content.production_countries &&
              content.production_countries[0] && (
                <p>{country(content.production_countries[0].iso_3166_1)}</p>
              )}
            <p>{content.runtime}분</p>
            {content.genres &&
              content.genres.map((genre: genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
          </div>
          <div>⭐ {content.vote_average.toFixed(2)}</div>
          <div className="contents-credit">
            <div>
              <p>제작</p>
              {content.crew &&
                content.crew.find(
                  (crew: crew) => crew.department === "Directing"
                )?.name}
            </div>
            <div>
              <p>출연</p>
              {content.cast &&
                content.cast.slice(0, 4).map((crew: crew, idx: number) => (
                  <p key={crew.id}>
                    {crew.name}
                    {idx < 3 && ","}
                  </p>
                ))}
            </div>
          </div>
          {content.tagline && <div>{content.tagline}</div>}
          <div className="contents-overview">
            <p style={{ WebkitLineClamp: overviewStatus ? 100 : 3 }}>
              {content.overview}
            </p>
            <div
              onClick={() => {
                setOverviewStatus(!overviewStatus);
              }}
            >
              {overviewStatus ? "닫기 ∧" : "더보기 ∨"}
            </div>
          </div>
        </div>
        <div className="contents__poster">
          {content.poster_path ? (
            <Image
              src={imageUrl(content.poster_path)}
              alt=""
              fill
              sizes="10vw"
            />
          ) : (
            <div className="blank">이미지 준비중입니다.</div>
          )}
        </div>
      </section>
      <section className="section__content-bottom-lists">
        <Carousel
          data={similar}
          title={`${content.title} 비슷한 영화`}
        ></Carousel>
        <Carousel data={recommend} title={`추천 영화`}></Carousel>
      </section>
    </MainLayout>
  );
};

export default Contents;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const contentData = await getMovieInfo(params.id);
  const creditData = await getCredits(params.id);
  const similarData = await getSimilar(params.id);
  const recommendData = await getRecommendations(params.id);

  return {
    props: {
      params,
      content: { ...contentData, ...creditData },
      similar: similarData.results,
      recommend: recommendData.results,
    },
  };
};
