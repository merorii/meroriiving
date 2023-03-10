//base
import type { GetServerSideProps, NextPage } from "next";
import { useRef } from "react";

//components
import { CardList } from "src/components";

//layout
import { MainLayout } from "src/layout";

//hook
import { useInfiniteQueryList, useIntersectionObserver } from "src/hooks";

//common
import { getMovieList } from "src/common/api";
import { menuName } from "src/common/util";

//type
import { InfiniteDataProps, ListPageProps } from "src/types";

const List: NextPage<ListPageProps> = ({ result, params }) => {
  const { pages, fetchNextPage } = useInfiniteQueryList(
    getMovieList,
    params.type
  );
  const data = pages?.pages;

  const bottom = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useIntersectionObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <MainLayout>
      <section className="section__search-lists">
        <p>
          {menuName(params.type)} 영화 검색결과({result.total_results}개)
        </p>
        <CardList
          data={data?.map((item: InfiniteDataProps) => item.data).flat() || []}
        ></CardList>
        <div ref={bottom} />
      </section>
    </MainLayout>
  );
};

export default List;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const result = await getMovieList(params.type, 1);

  return {
    props: {
      params,
      result,
    },
  };
};
