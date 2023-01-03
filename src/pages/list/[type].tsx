//base
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";

//components
import { MainLayout } from "src/components";

//type

//common

const List: NextPage = (props: any) => {
  return <MainLayout>{props.params.type}</MainLayout>;
};

export default List;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
