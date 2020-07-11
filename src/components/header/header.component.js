import React from "react";

import { Title, SubTitle, Header } from "./header.styles";
import { Container, ContainerMid } from "../global-styles/global.styles";

import { useSelector } from "react-redux";

import SearchComponent from "../search/search-component";

const HeaderComponent = () => {
  const fetchBackgroundImage = useSelector(
    (state) => state.defaultImages.defaultImage[8]
  );

  const backgroundImage = ((fetchBackgroundImage || {}).urls || {}).regular || {};

  console.log(backgroundImage);
  return (
    <Container>
      <Header backgroundImage={backgroundImage}>
        <ContainerMid>
          <Title>
            <h1>visualizer</h1>
          </Title>
          <SubTitle>
            <h2>Your daily visual inspiration</h2>
            <h4>Powered by react, redux-saga and styled-components</h4>
          </SubTitle>
          <SearchComponent />
          <small style={{ marginTop: "1rem" }}>
            Designed and Developed by Eugene Peter Maestrado
          </small>
        </ContainerMid>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
