import styled from "styled-components";

export const MainNavStyled = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0 3vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
  z-index: 50;
`;

export const Menus = styled.div`
  display: flex;
  margin-left: 3vw;
  div + div {
    margin-left: 2vw;
  }
`;
