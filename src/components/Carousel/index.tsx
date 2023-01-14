//base
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//libraries
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper";

//type
import { movieResult } from "src/types";

//api
import { imageUrl } from "src/common/util";

//style
import { Card, CarouselLayout } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface CarouselProps {
  data: movieResult[];
  fade?: true | undefined;
  title?: string;
  viewAll?: { status: boolean; type?: string };
}

export const Carousel = (props: CarouselProps) => {
  const { data, fade, title, viewAll } = props;
  const [fadeData, setFadeData] = useState<number[]>([]);
  const [current, setCurrentData] = useState<number>(0);

  useEffect(() => {
    if (fade && !fadeData.length) {
      const _idData = data.map((item: movieResult) => item.id);
      setFadeData(_idData);
    }
  }, [data, fade, fadeData]);

  return (
    <CarouselLayout fade={fade}>
      {title && <h2>{title}</h2>}
      {viewAll && viewAll.status && (
        <div className="btn-all">
          <Link href={`/list/${viewAll?.type}`}>전체보기</Link>
        </div>
      )}
      <Swiper
        spaceBetween={10}
        slidesPerView={fade ? 1 : 3}
        slidesPerGroup={fade ? 1 : 3}
        loop={fade || false}
        mousewheel={!fade}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        effect={fade ? "fade" : "slide"}
        autoplay={
          fade
            ? {
                delay: 5000,
                disableOnInteraction: false,
              }
            : false
        }
        breakpoints={
          fade
            ? {}
            : {
                640: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                768: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
                1024: {
                  slidesPerView: 7,
                  slidesPerGroup: 7,
                },
                1400: {
                  slidesPerView: 8,
                  slidesPerGroup: 8,
                },
              }
        }
        modules={[Navigation, Pagination, EffectFade, Mousewheel, Autoplay]}
        onSlideChange={(c) => {
          fade && setCurrentData(c.realIndex);
        }}
      >
        {data.map((result: movieResult) => {
          const { id, title, poster_path, backdrop_path } = result;
          return fade ? (
            <SwiperSlide key={id}>
              <Card fade={fade}>
                <div className="movie-poster">
                  <Image fill priority src={imageUrl(backdrop_path)} alt="" />
                </div>
              </Card>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={id}>
              <Link href="/contents/[id]" as={`/contents/${id}`}>
                <Card fade={fade}>
                  {poster_path ? (
                    <div className="movie-poster">
                      <Image
                        fill
                        sizes="10vw"
                        src={imageUrl(poster_path)}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="movie-poster blank">준비중입니다.</div>
                  )}

                  <div className="movie-title">{title}</div>
                </Card>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {fade && (
        <div className="btn-detail">
          <Link href={`/contents/${fadeData[current]}`}>자세히 보기 </Link>
        </div>
      )}
    </CarouselLayout>
  );
};
