import Link from "next/link";
import { FooterLayout } from "./style";

export const Footer = () => {
  return (
    <FooterLayout>
      <p>
        Powered by{" "}
        <span>
          <Link href={"https://github.com/merorii"}>merorii</Link>
        </span>
      </p>
      <p>
        Source code :{" "}
        <span>
          <Link href={"https://github.com/merorii/meroriiving"}>
            go to github
          </Link>
        </span>
      </p>
    </FooterLayout>
  );
};
