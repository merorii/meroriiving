import styled from "styled-components";

export const MainNavStyled = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 5rem;
  padding: 0 3vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: white;
  z-index: 50;

  div {
    display: flex;
    align-items: center;
  }

  .searchbar {
    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: white;
      padding: 0.5rem 1rem;
    }
    div {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      background: url("https://www.tving.com/img/icon_search.svg");
      border: none;
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Menus = styled.div`
  display: flex;
  margin-left: 3vw;
  div + div {
    margin-left: 2vw;
  }
`;
