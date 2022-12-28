import styled from "styled-components";

export const MainContentStyled = styled.section`
  background: black;

  .main-section {
    position: relative;
    top: -20vw;
    margin-bottom: -15vw;
    padding-top: 10vw;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 15%
    );
    z-index: 5;
  }

  .list-section {
    position: relative;
    padding: 1rem 0;

    h2 {
      position: absolute;
      top: 0;
      color: white;
      margin: 0 0 0 3vw;
    }
  }
`;
