//base
import { useCallback, useEffect, useState } from "react";
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

//components
import { CustomArrow } from "src/components";

//type
import { movieResult } from "src/type/main";

//api
import { imageUrl } from "src/common/api/util";

//style
import { Card, PosterLayout } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  const settings = useCallback(() => {
    const baseSetting = {
      dots: true,
      fade: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 6,
      infinite: false,
      autoplay: false,
      nextArrow: <CustomArrow fade={fade} />,
      prevArrow: <CustomArrow fade={fade} />,
      afterChange: (current: number) => setCurrentData(current),
    };

    if (fade) {
      return {
        ...baseSetting,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
    }

    return {
      ...baseSetting,
      //   beforeChange: (current: number, next: number) => console.log(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
          },
        },
      ],
    };
  }, [fade]);

  return (
    <PosterLayout fade={fade}>
      <Swiper
        spaceBetween={10}
        slidesPerView={fade ? 1 : 6}
        slidesPerGroup={fade ? 1 : 6}
        // loop={fade ? true : false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        // autoplay={
        //   fade
        //     ? {
        //         delay: 2500,
        //         disableOnInteraction: false,
        //       }
        //     : false
        // }
        effect={fade ? "fade" : "slide"}
        modules={[Navigation, Pagination, EffectFade, Mousewheel, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((result: movieResult, idx) => {
          const { id, title, poster_path, backdrop_path } = result;
          return fade ? (
            <SwiperSlide>
              <Card key={id} fade={fade}>
                <div className="movie-poster">
                  <Image fill src={imageUrl(backdrop_path)} alt="" />
                </div>
              </Card>
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <Link key={id} href={`/detail/${id}`}>
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
