//base
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

//components
import { Carousel, MainLayout } from "src/components";

//type
import { genre } from "src/type/content";

//common
import {
  getRecommendations,
  getCredits,
  getMovieInfo,
  getSimilar,
} from "src/common/api";
import { country, imageUrl } from "src/common/util";

const Contents: NextPage = (props: any) => {
  const { content, similar, recommend } = props;
  const [overviewStatus, setOverviewStatus] = useState(false);

  return (
    <MainLayout>
      <Image
        src={imageUrl(content.backdrop_path)}
        alt=""
        fill
        priority
        className="contents__background"
      />
      <section className="contents__section">
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
            {content.production_countries[0] && (
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
              {
                content.crew.find(
                  (crew: any) => crew.department === "Directing"
                ).name
              }
            </div>
            <div>
              <p>출연</p>
              {content.cast.slice(0, 4).map((crew: any, idx: number) => (
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
          <Image src={imageUrl(content.poster_path)} alt="" fill sizes="10vw" />
        </div>
      </section>
      <section className="bottom_section">
        <section className="list-section">
          <h2>{content.title} 비슷한 영화</h2>
          <Carousel data={similar}></Carousel>
        </section>
        <section className="list-section">
          <h2>추천 영화</h2>
          <Carousel data={recommend}></Carousel>
        </section>
      </section>
    </MainLayout>
  );
};

export default Contents;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contentData = await getMovieInfo(params && params.id);
  const creditData = await getCredits(params && params.id);
  const similarData = await getSimilar(params && params.id);
  const recommendData = await getRecommendations(params && params.id);

  return {
    props: {
      params,
      content: { ...contentData, ...creditData },
      similar: similarData.results,
      recommend: recommendData.results,
    },
  };
};
