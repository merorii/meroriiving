import styled from "styled-components";

export const CardWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 12vw;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 1.2vw;
  margin-bottom: 2vw;
  transition: transform 0.3s ease-in-out;

  .poster {
    width: 100%;
    height: 17vw;
    border-radius: 10px;
    position: relative;
  }

  @media only screen and (max-width: 1400px) {
    width: 14vw;
    div.poster {
      height: 20vw;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 16vw;
    div.poster {
      height: 22vw;
    }
  }
  @media only screen and (max-width: 639px) {
    width: 29vw;
    div.poster {
      height: 40vw;
    }
  }

  &:hover {
    opacity: 0.8;
    transform: translate3d(0, -0.75rem, 0);
  }

  .movie-poster {
    overflow: hidden;
  }

  .blank {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
  }

  .movie-title {
    padding: 0.6em 1em 0 0.05em;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
  }
`;
