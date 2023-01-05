import Link from "next/link";
import { useState } from "react";
import { MainNavStyled, Menus } from "./style";

export const MainNav = () => {
  const [keyword, setKeyword] = useState("");
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
      <div className="searchbar">
        <input
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        ></input>
        <button>
          <Link href={`/search?keyword=${keyword}`}></Link>
        </button>
      </div>
    </MainNavStyled>
  );
};
