//base
import Link from "next/link";
import Image from "next/image";

//libraries
import Slider from "react-slick";

//type
import { movieResult } from "src/type/main";

//api
import { imageUrl } from "src/common/api/util";

//style
import { Card, PosterList } from "./style";

export const Carousel = ({ data }: any) => {
  const settings = {
    arrow: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    style: { width: "100%" },
  };

  return (
    <PosterList style={{ position: "relative" }}>
      <Slider {...settings}>
        {data.map((result: movieResult) => {
          const { id, poster_path, title } = result;
          return (
            <Card key={id}>
              <Link href={`/detail/${id}`}>
                <Image
                  src={imageUrl(poster_path)}
                  alt=""
                  width={270}
                  height={400}
                />
                {/* <Poster posterUrl={imageUrl(poster_path)} /> */}
                <div>{title}</div>
              </Link>
            </Card>
          );
        })}
      </Slider>
    </PosterList>
  );
};
