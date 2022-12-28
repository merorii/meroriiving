//base
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//libraries
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper";

//type
import { movieResult } from "src/type/main";

//api
import { imageUrl } from "src/common/api/util";

//style
import { Card, PosterLayout } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface CarouselProps {
  data: movieResult[];
  fade?: true | undefined;
}

export const Carousel = (props: CarouselProps) => {
  const { data, fade } = props;
  const [fadeData, setFadeData] = useState<number[]>([]);
  const [current, setCurrentData] = useState(0);

  useEffect(() => {
    if (fade && !fadeData.length) {
      const _idData = data.map((item: movieResult) => item.id);
      setFadeData(_idData);
    }
  }, [data, fade, fadeData]);

  return (
    <PosterLayout fade={fade}>
      <Swiper
        spaceBetween={10}
        slidesPerView={fade ? 1 : 6}
        slidesPerGroup={fade ? 1 : 6}
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
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                1024: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
                1400: {
                  slidesPerView: 7,
                  slidesPerGroup: 7,
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
              <Link href={`/detail/${id}`}>
                <Card fade={fade}>
                  <div className="movie-poster">
                    <Image
                      fill
                      sizes="10vw"
                      src={imageUrl(poster_path)}
                      alt=""
                    />
                  </div>
                  <div className="movie-title">{title}</div>
                </Card>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {fade && (
        <Link href={`/detail/${fadeData[current]}`}>
          <div className="btn-more">자세히 보기</div>
        </Link>
      )}
    </PosterLayout>
  );
};
