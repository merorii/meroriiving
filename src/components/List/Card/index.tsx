//components
import { Card } from "src/components";

//type
import { movieResult } from "src/type/main";

//style
import { ListWrap } from "./style";

interface Props {
  data: movieResult[];
}
export const CardList = (props: Props) => {
  const { data } = props;
  return (
    <ListWrap>
      {data.map((result: any) => {
        const { id, poster_path, title } = result;
        return <Card key={id} card={{ id, poster_path, title }}></Card>;
      })}
    </ListWrap>
  );
};
