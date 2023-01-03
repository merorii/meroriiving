//base
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

//components
import { MainLayout } from "src/components";

//type

//common

const Search: NextPage = (props: any) => {
  const keyword = useRouter();
  return <MainLayout>{keyword.query.keyword}</MainLayout>;
};

export default Search;
