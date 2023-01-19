import styled from "styled-components";

export const MainContentStyled = styled.section`
  background: black;
  color: white;
  min-height: 100vh;

  .section__main-lists {
    position: relative;
    top: -20vw;
    margin-bottom: -10vw;
    padding-top: 10vw;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 15%
    );
    z-index: 5;
  }

  .section__content-bottom-lists {
    position: relative;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%
    );

    .swiper-pagination {
      padding-right: 3vw;
    }
  }

  .contents-background {
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 90vh;

    @media only screen and (max-width: 768px) {
      position: relative;
      height: 35vh;
      opacity: 1;
      margin-top: 5rem;
    }
  }

  .section__content {
    position: relative;
    top: 0;
    margin: 0 3vw 4rem;
    padding: 10vw 2vw 5rem;
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

    @media only screen and (max-width: 768px) {
      padding-top: 6vw;
      display: block;
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

      @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .contents-tag {
      p {
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.7);
        padding: 0.1rem 0.3rem;
        border-radius: 3px;
        margin: 0 0.5vw 0.5vw 0;
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
    border-radius: 1rem;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .blank {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    width: 100%;
    height: 100%;
  }

  .section__search-lists {
    position: relative;
    margin: 0 3vw;
    padding: 10vw 2vw 5vw;
    color: rgba(255, 255, 255, 0.7);
    & > p {
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }

    @media only screen and (min-width: 1400px) {
      & > p {
        font-size: 1.1rem;
      }
    }
    @media only screen and (max-width: 768px) {
      margin: 0 1vw;
    }
    @media only screen and (max-width: 600px) {
      & > p {
        font-size: 1rem;
      }
    }
  }

  .page__not-found {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    p {
      color: hsla(0, 0%, 100%, 0.7);
    }

    div {
      display: inline-block;
      padding: 1rem 2rem;
      margin-top: 2rem;
      background: #fff;
      color: #000;
      border-radius: 2rem;
    }
  }
`;
