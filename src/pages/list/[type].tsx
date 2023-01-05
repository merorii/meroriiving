//base
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import { getMovieList } from "src/common/api";

//components
import { CardList, MainLayout } from "src/components";
import { useInfiniteQueryList, useIntersectionObserver } from "src/hook";

//type

//common

const List: NextPage = ({ result, params }: any) => {
  console.log(result);
  const { data, fetchNextPage } = useInfiniteQueryList(
    getMovieList,
    params.type
  );

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
          &#34;{params.type}&#34; 검색 결과가 {result.total_results}개 있습니다.
        </p>
        <CardList
          data={data?.pages.map((item: any) => item.data).flat() || []}
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
