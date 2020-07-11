import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  height: 24rem;

  background: url("${(props) => props.backgroundImage}");
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 Header::after {
    width: 100%
    height: 24rem;
    background-color: black;
  }
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 4rem;

    font-weight: 800;
    text-transform: uppercase;
  }

  @media screen and (min-width: 992px) {
    max-width: 70rem;
  }
`;

export const SubTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h2 {
    font-size: 2rem;
  }
  h2,
  h3 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  h4 {
    margin: 0.2rem;
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    max-width: 70rem;
  }
`;
