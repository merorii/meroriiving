import styled, { css } from "styled-components";

interface Props {
  carousel?: boolean | undefined;
}

export const CardWrap = styled.div<Props>`
  display: inline-block;
  position: relative;
  width: ${({ carousel }) => (carousel ? "100%" : "12vw")};
  margin-bottom: 2vw;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 1.2vw;
  transition: transform 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: translate3d(0, -0.75rem, 0);
  }

  .movie-poster {
    width: 100%;
    height: 17vw;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  @media only screen and (max-width: 1400px) {
    width: 14vw;
    div.movie-poster {
      height: 20vw;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 16vw;
    div.movie-poster {
      height: 22vw;
    }
  }
  @media only screen and (max-width: 639px) {
    width: 29vw;
    div.movie-poster {
      height: 40vw;
    }
  }

  ${({ carousel }) =>
    carousel &&
    css`
      .movie-poster {
        height: 15vw;
        @media only screen and (max-width: 1400px) {
          height: 16vw;
        }
        @media only screen and (max-width: 1024px) {
          height: 18vw;
        }
        @media only screen and (max-width: 768px) {
          height: 24vw;
        }
        @media only screen and (max-width: 639px) {
          height: 42vw;
        }
      }
    `}

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
