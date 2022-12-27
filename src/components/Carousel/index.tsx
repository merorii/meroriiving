//base
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//libraries
import Slider from "react-slick";

//components
import { CustomArrow } from "src/components";

//type
import { movieResult } from "src/type/main";

//api
import { imageUrl } from "src/common/api/util";

//style
import { Card, Poster, PosterLayout } from "./style";

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
      prevArrow: <CustomArrow fade={fade} first={!fade && current === 0} />,
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
      beforeChange: (current: number, next: number) => console.log(next),
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
  }, [fade, current]);

  return (
    <PosterLayout fade={fade}>
      <Slider {...settings()}>
        {data.map((result: movieResult, idx) => {
          if (!fade) console.log(idx);
          const { id, title, poster_path, backdrop_path } = result;
          return fade ? (
            <Card key={id} fade={fade}>
              <Image layout="fill" src={imageUrl(backdrop_path)} alt="" />
            </Card>
          ) : (
            <Link key={id} href={`/detail/${id}`}>
              <Card fade={fade}>
                <Poster posterUrl={imageUrl(poster_path)} />
                <div className="movie-title">{title}</div>
              </Card>
            </Link>
          );
        })}
      </Slider>
      {fade && (
        <Link href={`/detail/${fadeData[current]}`}>
          <div className="btn-more">자세히 보기</div>
        </Link>
      )}
    </PosterLayout>
  );
};
