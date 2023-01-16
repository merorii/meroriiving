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
    title?: string;
  };
  carousel?: boolean;
}
export const Card = ({ card, carousel }: Props) => {
  const { id, poster_path, title } = card;
  return (
    <CardWrap carousel={carousel}>
      <Link href="/contents/[id]" as={`/contents/${id}`}>
        <div className="movie-poster">
          {poster_path ? (
            <Image fill sizes="10vw" src={imageUrl(poster_path)} alt="" />
          ) : (
            <div className="poster blank">이미지 준비중입니다.</div>
          )}
        </div>
        {title && <p className="movie-title">{title}</p>}
      </Link>
    </CardWrap>
  );
};
