// base
import React, { HTMLAttributes } from "react";

// components
import { MainNav } from "src/components";

// style
import { MainContentStyled } from "./style";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNav />
      <MainContentStyled>{children}</MainContentStyled>
    </>
  );
};
