import styled, { css } from "styled-components";

interface FadeProps {
  fade: true | undefined;
}

export const CarouselLayout = styled.div<FadeProps>`
  position: relative;

  ${({ fade }) =>
    fade
      ? css`
          .swiper-pagination {
            top: auto;
            right: auto;
            bottom: 15vw;
            text-align: left;
            margin-left: 3vw;
            z-index: 6;
            display: block !important;
          }
          .swiper-button-prev,
          .swiper-button-next {
            display: flex !important;
            top: 40%;
          }
        `
      : css`
          padding: 1rem 0;

          &:hover {
            .swiper-button-prev,
            .swiper-button-next {
              display: flex !important;
            }
            .swiper-pagination {
              display: block !important;
            }
          }
          .swiper-pagination {
            top: 0;
            bottom: auto;
            padding-right: 8vw;
            text-align: right;
          }
        `};

  .swiper {
    ${({ fade }) =>
      !fade &&
      css`
        padding: 2rem;
        @media only screen and (max-width: 768px) {
          padding: 2rem 1rem;
        }
      `}
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    color: white;
  }

  .swiper-pagination {
    display: none;
  }

  .swiper-pagination-bullet {
    background: white;
  }

  h2 {
    position: absolute;
    top: 0;
    margin: 0 3vw;
  }

  div.btn-all {
    display: none;
    position: absolute;
    right: 2.5vw;
    font-size: 0.8rem;
    line-height: 1.6rem;
    color: rgba(255, 255, 255, 0.7);
    z-index: 2;
    cursor: pointer;
  }

  div.btn-detail {
    color: white;
    position: absolute;
    right: 3vw;
    top: 32vw;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1vw 2vw;
    font-size: 1vw;
    z-index: 6;

    @media only screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  &:hover {
    div.btn-all {
      display: block;
    }
  }
`;

export const FadePoster = styled.div<FadeProps>`
  position: relative;
  width: 100%;
  height: 50vw;
  overflow: hidden;
  border-radius: 10px;
`;
