import styled from "styled-components";

export const MainContentStyled = styled.section`
  background: black;
  color: white;
  min-height: 100vh;

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

    &:hover {
      p.btn-all {
        display: block;
      }
    }

    h2 {
      position: absolute;
      top: 0;
      margin: 0 0 0 3vw;
    }

    p.btn-all {
      display: none;
      position: absolute;
      right: 2.5vw;
      font-size: 0.8rem;
      line-height: 1.6rem;
      color: rgba(255, 255, 255, 0.7);
      z-index: 2;
      cursor: pointer;
    }
  }

  .bottom_section {
    position: relative;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%
    );
  }

  .contents__background {
    position: absolute;
    opacity: 0.2;
    width: 100vw;
    height: 80vh;
  }

  .contents__section {
    position: relative;
    top: 0;
    margin: 0 3vw 5vw;
    padding: 10vw 2vw 5vw;
    color: rgba(255, 255, 255, 0.7);
    display: grid;
    column-gap: 2.5rem;
    grid-template-columns: minmax(auto, 45vw) auto 20vw;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.18);
    }
  }

  .contents__text {
    grid-column-start: 1;

    & > div {
      margin-bottom: 1rem;
    }

    .contents-title {
      font-size: 3vw;
      font-weight: bold;
      margin-bottom: 0;
      color: white;
    }

    .contents-tag {
      p {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        margin-right: 0.5vw;
        font-size: 0.9rem;
      }
    }

    .contents-credit {
      p {
        display: inline-block;
        margin-right: 0.5vw;
      }
      p:first-child {
        margin-right: 1vw;
      }
    }

    .contents-overview {
      p {
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        word-break: keep-all;
        text-overflow: ellipsis;
      }
      div {
        margin-top: 1rem;
      }
    }
  }

  .contents__poster {
    position: relative;
    grid-column-start: 3;
    width: 21vw;
    height: 28vw;
    img {
      border-radius: 1rem;
    }
  }

  .search-section {
    position: relative;
    margin: 0 3vw;
    padding: 10vw 2vw 5vw;
    color: rgba(255, 255, 255, 0.7);
    & > p {
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }
  }

  .page-404 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
