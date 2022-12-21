// base
import React, { HTMLAttributes } from "react";

// components
import MainNav from "../MainNav";

// style
import { MainContentStyled } from "./style";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  //   title: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <MainNav />
      <MainContentStyled>{children}</MainContentStyled>
    </>
  );
};
