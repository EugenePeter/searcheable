import styled from "styled-components";

export const SearchBox = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 50px;
  padding-left: 2rem;
  font-size: 2rem;
  margin-top: 2rem;
  border: none;

  &:focus {
    outline: blue;
    border: solid 2px;
  }
`;
