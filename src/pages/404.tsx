//base
import type { NextPage } from "next";
import Link from "next/link";

//components
import { MainLayout } from "../components";

const NoPage: NextPage = () => {
  return (
    <MainLayout>
      <section className="page-404">
        <h2>해당 페이지를 찾을 수 없습니다.</h2>
        <p>주소를 한번 더 확인해주시거나,</p>
        <p>메로리빙 홈에서 더 많은 컨텐츠를 확인해보세요!</p>
        <Link href={"/"}>
          <div>홈으로 가기</div>
        </Link>
      </section>
    </MainLayout>
  );
};

export default NoPage;
