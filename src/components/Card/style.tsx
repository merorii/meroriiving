import styled from "styled-components";

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
    height: ${({ carousel }) => (carousel ? "15vw" : "17vw")};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }

  @media only screen and (max-width: 1400px) {
    width: ${({ carousel }) => !carousel && "14vw"};
    div.movie-poster {
      height: ${({ carousel }) => (carousel ? "16vw" : "20vw")};
    }
  }
  @media only screen and (max-width: 1024px) {
    width: ${({ carousel }) => !carousel && "16vw"};
    div.movie-poster {
      height: ${({ carousel }) => (carousel ? "18vw" : "22vw")};
    }
  }
  @media only screen and (max-width: 768px) {
    div.movie-poster {
      height: ${({ carousel }) => carousel && "24vw"};
    }
  }
  @media only screen and (max-width: 639px) {
    width: ${({ carousel }) => !carousel && "29vw"};
    div.movie-poster {
      height: ${({ carousel }) => (carousel ? "42vw" : "40vw")};
    }
  }

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
