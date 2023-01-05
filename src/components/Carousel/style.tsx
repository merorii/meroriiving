import styled, { css } from "styled-components";

interface FadeProps {
  fade: true | undefined;
}

export const PosterLayout = styled.div<FadeProps>`
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

  .btn-more {
    color: white;
    position: absolute;
    right: 3vw;
    top: 32vw;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1vw 2vw;
    font-size: 1vw;
    z-index: 6;
  }
`;

export const Card = styled.div<FadeProps>`
  ${({ fade }) =>
    !fade &&
    css`
      transition: transform 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
        transform: translate3d(0, -0.75rem, 0);
      }
    `}

  .movie-poster {
    position: relative;
    width: 100%;
    height: ${({ fade }) => (fade ? "50vw" : "20vw")};
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
