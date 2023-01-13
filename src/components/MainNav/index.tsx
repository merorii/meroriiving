import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SearchBar } from "../SearchBar";
import { MainNavStyled, Menus } from "./style";

export const MainNav = () => {
  const [searchPop, setSearchPop] = useState(false);
  return (
    <MainNavStyled>
      <div>
        <h1>
          <Link href={"/"}>MERORIIVING</Link>
        </h1>
        <Menus>
          <div>실시간</div>
          <div>TV</div>
          <div>영화</div>
        </Menus>
      </div>
      <div>
        <div
          className={`search-icon${searchPop ? " exit" : ""}`}
          onClick={() => {
            setSearchPop(!searchPop);
          }}
        ></div>
        {searchPop && <SearchBar />}
      </div>
    </MainNavStyled>
  );
};
