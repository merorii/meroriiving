import styled, { css } from "styled-components";

interface PosterProps {
  posterUrl: string;
}

interface FadeProps {
  fade: any;
}

interface PosterLayoutProps {
  fade: any;
}

export const PosterLayout = styled.div<PosterLayoutProps>`
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
          }
          .slick-arrow {
            display: flex !important;
          }
          .slick-dots {
            display: block !important;
          }
        `
      : css`
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
            padding-right: 3vw;
            text-align: right;
          }
        `};
  .swiper {
    ${({ fade }) =>
      !fade &&
      css`
        padding: 2rem;
      `}
  }

  .swiper-button-prev {
    /* display: flex; */
    /* background: linear-gradient(
      rgba(0, 0, 0, 0),
      rgb(0, 0, 0) 44%,
      rgba(0, 0, 0, 0)
    );
    left: 0;
    padding: 3rem 3rem 3rem 1rem;
    /* align-items: center;
    width: 50px;
    height: 100%;
    background: url("https://www.tving.com/img/icon_slide_left.svg"),
      linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0) 44%, rgba(0, 0, 0, 0));
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50%; */
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

  .slick-track {
    padding: 0 3vw;
  }

  .btn-more {
    color: white;
    position: absolute;
    right: 3vw;
    top: 32vw;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1rem 2rem;
    z-index: 6;
  }
`;

export const Card = styled.div<FadeProps>`
  .movie-poster {
    position: relative;
    width: 100%;
    height: ${({ fade }) => (fade ? "50vw" : "23vw")};
    overflow: hidden;
    border-radius: 10px;
  }

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    color: hsla(0, 0%, 100%, 0.7);
    font-size: 1.2vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;
