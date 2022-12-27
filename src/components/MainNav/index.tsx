import Link from "next/link";
import { MainNavStyled, Menus } from "./style";

export const MainNav = () => {
  return (
    <MainNavStyled>
      <Link href={"/"}>
        <h1>MERORIIVING</h1>
      </Link>
      <Menus>
        <div>실시간</div>
        <div>TV</div>
        <div>영화</div>
      </Menus>
    </MainNavStyled>
  );
};
