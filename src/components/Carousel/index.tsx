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
  const [fadeData, setFadeData] = useState<{
    idData: number[];
    current: number;
  }>({ idData: [], current: 0 });

  useEffect(() => {
    if (fade && !fadeData.idData.length) {
      const _idData = data.map((item: movieResult) => item.id);
      setFadeData({ ...fadeData, idData: _idData });
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
      afterChange: (current: number) =>
        setFadeData({ ...fadeData, current: current }),
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
      };
    }

    return {
      ...baseSetting,
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
  }, [fade, fadeData]);

  return (
    <PosterLayout fade={fade}>
      <Slider {...settings()}>
        {data.map((result: movieResult) => {
          const { id, title, poster_path, backdrop_path } = result;
          return fade ? (
            <Card key={id} fade={fade}>
              <Image layout="fill" src={imageUrl(backdrop_path)} alt="" />
            </Card>
          ) : (
            <Link key={id} href={`/detail/${id}`}>
              <Card fade={fade}>
                <Poster posterUrl={imageUrl(poster_path)} />
                <div style={{ color: "white" }}>{title}</div>
              </Card>
            </Link>
          );
        })}
      </Slider>
      {fade && (
        <Link href={`/detail/${fadeData.idData[fadeData.current]}`}>
          <div className="btn-more">자세히 보기</div>
        </Link>
      )}
    </PosterLayout>
  );
};
