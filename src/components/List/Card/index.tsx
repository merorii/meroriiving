//components
import { Card } from "src/components";

//type
import { movieResult } from "src/types";

//style
import { ListWrap } from "./style";

interface Props {
  data: movieResult[];
}
export const CardList = ({ data }: Props) => {
  return (
    <ListWrap>
      {data.map((result: movieResult) => {
        const { id, poster_path, title } = result;
        return <Card key={id} card={{ id, poster_path, title }} />;
      })}
    </ListWrap>
  );
};
