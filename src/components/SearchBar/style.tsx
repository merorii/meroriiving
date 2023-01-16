import styled from "styled-components";

export const SearchBarLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 50vw;
  padding-top: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  z-index: -1;

  & > div {
    width: 60%;
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
    input {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      color: white;
      padding: 0.5rem 1rem;
    }
  }

  .list-search-recent {
    div:not(.list-search-recent__title) {
      &:hover {
        font-weight: bold;
      }
    }
    .list-search-recent__title {
      display: flex;
      align-items: center;
      margin-bottom: 0.7rem;
      p:first-child {
        font-weight: bold;
        margin-right: 1rem;
      }
    }

    p.btn-delete {
      display: inline;
      font-size: 0.9rem;
      color: hsla(0, 0%, 100%, 0.7);
      cursor: pointer;
      &:after {
        content: " ⓧ";
      }
      &:hover {
        color: white;
      }
    }
  }
`;
