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

  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: 400;
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

  h2,
  h3 {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0.2rem;
  }

  @media screen and (min-width: 992px) {
    max-width: 70rem;
  }
`;
