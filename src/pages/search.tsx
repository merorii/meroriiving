//base
import type { GetServerSideProps, NextPage } from "next";
import { useRef } from "react";

//components
import { MainLayout, CardList } from "src/components";

//hooks
import { useInfiniteQueryList, useIntersectionObserver } from "src/hooks";

//api
import { searchMovie } from "src/common/api";

//type
import { InfiniteDataProps, SearchPageProps } from "src/types";

const Search: NextPage<SearchPageProps> = ({ result, keyword }) => {
  const { data, fetchNextPage } = useInfiniteQueryList(searchMovie, keyword);

  const bottom = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useIntersectionObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <MainLayout>
      <section className="search-section">
        <p>
          &#34;{keyword}&#34; 검색 결과가 {result.total_results}개 있습니다.
        </p>
        <CardList
          data={
            data?.pages.map((item: InfiniteDataProps) => item.data).flat() || []
          }
        ></CardList>
        <div ref={bottom} />
      </section>
    </MainLayout>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (Object.keys(query).length === 0)
    return {
      redirect: {
        permanent: false,
        destination: "/search?keyword=",
      },
      props: {},
    };

  if (!query.keyword)
    return {
      props: {
        results: [],
        keyword: "",
      },
    };

  const result = await searchMovie(query.keyword, 1);

  return {
    props: {
      result: result,
      keyword: query.keyword,
    },
  };
};
