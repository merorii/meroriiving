import styled from "styled-components";

export const FooterLayout = styled.footer`
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  padding: 2rem 0;
  margin: 0 3vw;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.18);
  }

  span {
    font-weight: bold;
    &:hover {
      color: #fff;
    }
  }
`;
