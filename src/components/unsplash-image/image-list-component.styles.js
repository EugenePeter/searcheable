import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  /* max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 350px; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 10px;
  max-width: 70rem;
  margin: 4rem auto;

  img:nth-child(5n + 1) {
    background-color: blue;

    grid-column: 1 / span 1;
    grid-row: span 2;
  }

  img:nth-child(5n + 2) {
    background-color: red;
    grid-column: 2 / span 2;
    grid-row: span 1;
  }

  img:nth-child(5n + 3) {
    background-color: yellow;
    grid-column: 2 / span 1;
    grid-row: span 1;
  }

  img:nth-of-type(5n + 4) {
    background-color: purple;
    grid-column: 3 / span 1;
    grid-row: span 2;
  }

  img:nth-of-type(5n + 5) {
    background-color: orange;
    grid-column: 1 / span 2;
    grid-row: span 1;
  }
`;
