import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(6rem, auto);
  grid-gap: 0.5rem;
  max-width: 96%;
  margin: 0.5rem auto;

  img:nth-child(5n + 1) {
    background-color: gray;

    grid-column: 1 / span 1;
    grid-row: span 2;
  }

  img:nth-child(5n + 2) {
    background-color: gray;
    grid-column: 2 / span 2;
    grid-row: span 1;
  }

  img:nth-child(5n + 3) {
    background-color: gray;
    grid-column: 2 / span 1;
    grid-row: span 1;
  }

  img:nth-of-type(5n + 4) {
    background-color: gray;
    grid-column: 3 / span 1;
    grid-row: span 2;
  }

  img:nth-of-type(5n + 5) {
    background-color: gray;
    grid-column: 1 / span 2;
    grid-row: span 1;
  }

  @media screen and (min-width: 48rem) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(15rem, auto);
    grid-gap: 1.875rem;
    max-width: 80rem;
    margin: 4rem auto;

    img:nth-child(12n + 1) {
      background-color: gray;
      grid-column: 1 / span 1;
      grid-row: span 1;
    }
    img:nth-child(12n + 2) {
      background-color: gray;
      grid-column: 2 / span 1;
      grid-row: span 2;
    }

    img:nth-child(12n + 3) {
      background-color: gray;
      grid-column: 3 / span 1;
      grid-row: span 1;
    }
    img:nth-child(12n + 4) {
      background-color: gray;
      grid-column: 4 / span 1;
      grid-row: span 1;
    }
    img:nth-child(12n + 5) {
      background-color: gray;
      grid-column: 1 / span 1;
      grid-row: span 1;
    }
    img:nth-child(12n + 6) {
      background-color: gray;
      grid-column: 3 / span 2;
      grid-row: span 1;
    }
    img:nth-child(12n + 7) {
      background-color: gray;
      grid-column: 1 / span 2;
      grid-row: span 1;
    }
    img:nth-child(12n + 8) {
      background-color: gray;
      grid-column: 3 / span 1;
      grid-row: span 2;
    }
    img:nth-child(12n + 9) {
      background-color: gray;
      grid-column: 4 / span 1;
      grid-row: span 1;
    }

    img:nth-child(12n + 10) {
      background-color: gray;
      grid-column: 1 / span 1;
      grid-row: span 1;
    }

    img:nth-child(12n + 11) {
      background-color: gray;
      grid-column: 2 / span 1;
      grid-row: span 1;
    }

    img:nth-child(12n + 12) {
      background-color: gray;
      grid-column: 4 / span 1;
      grid-row: span 1;
    }
  }
`;
