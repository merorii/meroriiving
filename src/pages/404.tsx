//base
import type { NextPage } from "next";

//components
import { MainLayout } from "../components";

const NoPage: NextPage = () => {
  return (
    <MainLayout>
      <section className="page-404">404 File not found</section>
    </MainLayout>
  );
};

export default NoPage;
