//base
import type { GetServerSideProps, NextPage } from "next";
import { searchMovie } from "src/common/api/api";

//components
import { MainLayout, CardList } from "src/components";

const Search: NextPage = ({ results, keyword }: any) => {
  console.log(keyword);
  return (
    <MainLayout>
      <section className="search-section">
        <div>
          &#34;{keyword}&#34; 검색 결과가 {results.length}개 있습니다.
        </div>
        <CardList data={results}></CardList>
      </section>
    </MainLayout>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const result = await searchMovie(query.keyword);

  return {
    props: {
      results: result.results,
      keyword: query.keyword,
    },
  };
};
