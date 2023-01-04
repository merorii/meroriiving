import styled from "styled-components";

export const CardWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 17vw;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 1.2vw;
  margin-bottom: 2vw;
  transition: transform 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: translate3d(0, -0.75rem, 0);
  }

  .poster {
    width: 100%;
    height: 23vw;
    border-radius: 10px;
    position: relative;
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
