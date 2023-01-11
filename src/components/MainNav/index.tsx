import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MainNavStyled, Menus } from "./style";

export const MainNav = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const moveSearchPage = () => {
    if (!keyword) {
      alert("검색어를 입력하세요.");
      return;
    }
    router.push(`/search?keyword=${keyword}`);
  };

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
          onKeyDown={(e) => {
            if (e.keyCode === 13) moveSearchPage();
          }}
        ></input>
        <div onClick={moveSearchPage}></div>
      </div>
    </MainNavStyled>
  );
};
