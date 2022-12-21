import styled, { css } from "styled-components";

interface PosterProps {
  posterUrl: string;
}

export const PosterList = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 270px;
  overflow: hidden;
`;

export const Poster = styled.div<PosterProps>`
  ${({ posterUrl }) =>
    css`
      background: url(${posterUrl});
    `};
  width: 270px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
`;
