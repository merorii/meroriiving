import styled from "styled-components";

export const ListWrap = styled.div`
  display: grid;
  grid-template: auto/repeat(7, 1fr);
  align-items: flex-start;
  grid-gap: 0 0.65em;
  gap: 0 0.65em;

  @media only screen and (max-width: 1400px) {
    grid-template: auto/repeat(6, 1fr);
  }
  @media only screen and (max-width: 1024px) {
    grid-template: auto/repeat(5, 1fr);
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 639px) {
    grid-template: auto/repeat(3, 1fr);
  }
`;
