import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SearchBarLayout } from "./style";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [recents, setRecents] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const items: string =
      localStorage.getItem("meroriiving_search_keywords") || "[]";
    setRecents(JSON.parse(items));
  }, []);

  const moveSearchPage = () => {
    if (!keyword) {
      alert("검색어를 입력하세요.");
      return;
    }

    let newkeywords: string[] = recents;
    if (recents.length >= 10) {
      newkeywords = recents.slice(0, -1);
    }

    newkeywords = [keyword, ...newkeywords];
    localStorage.setItem(
      "meroriiving_search_keywords",
      JSON.stringify(newkeywords)
    );
    router.push(`/search?keyword=${keyword}`);
  };

  const removeKeywords = (type: string | number) => {
    let _new: string[] = [];

    if (type !== "all") {
      _new = recents.filter((_, idx) => type !== idx);
    }

    localStorage.setItem("meroriiving_search_keywords", JSON.stringify(_new));
    setRecents(_new);
  };

  return (
    <SearchBarLayout>
      <div className="search-bar">
        <input
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) moveSearchPage();
          }}
        ></input>
        <div onClick={moveSearchPage} className="search-icon"></div>
      </div>
      <div className="list-search-recent">
        <div className="list-search-recent__title">
          <p>최근 검색어</p>
          <p
            className="btn-delete"
            onClick={() => {
              removeKeywords("all");
            }}
          >
            모두 지우기
          </p>
        </div>
        {recents.map((keyword: string, idx: number) => (
          <div key={`${keyword}_${idx}`}>
            <Link href={`/search/keyword=${keyword}`}>{keyword} </Link>
            <p
              className="btn-delete"
              onClick={() => {
                removeKeywords(idx);
              }}
            ></p>
          </div>
        ))}
      </div>
    </SearchBarLayout>
  );
};
