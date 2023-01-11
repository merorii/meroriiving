//base
import Image from "next/image";
import Link from "next/link";

//api
import { imageUrl } from "src/common/util";

//style
import { CardWrap } from "./style";

interface Props {
  card: {
    id: number;
    poster_path: string;
    title: string;
  };
}
export const Card = (props: Props) => {
  const { id, poster_path, title } = props.card;
  return (
    <CardWrap>
      <Link href="/contents/[id]" as={`/contents/${id}`}>
        <div className="movie-poster">
          {poster_path ? (
            <Image fill sizes="10vw" src={imageUrl(poster_path)} alt="" />
          ) : (
            <div className="poster blank">이미지 준비중입니다.</div>
          )}
        </div>
        <div className="movie-title">{title}</div>
      </Link>
    </CardWrap>
  );
};
