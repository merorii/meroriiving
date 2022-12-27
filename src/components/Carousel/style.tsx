import styled, { css } from "styled-components";

interface PosterProps {
  posterUrl: string;
}

interface FadeProps {
  fade: any;
}

export const PosterLayout = styled.div<FadeProps>`
  ${({ fade }) =>
    fade
      ? css`
          .slick-dots {
            top: auto;
            right: auto;
            bottom: 15vw;
            text-align: left;
            margin-left: 3vw;
            z-index: 6;
          }
        `
      : css`
          padding-top: 30px;
        `};

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

export const Poster = styled.div<PosterProps>`
  ${({ posterUrl }) =>
    css`
      background: url(${posterUrl});
    `};
  width: 100%;
  height: 20vw;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

export const Card = styled.div<FadeProps>`
  height: ${({ fade }) => (fade ? "50vw" : "22vw")};
  width: 100%;
  overflow: hidden;
  position: relative;
  ${({ fade }) =>
    fade ||
    css`
      margin: 0 10px;
    `};

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    color: hsla(0, 0%, 100%, 0.7);
  }
`;
