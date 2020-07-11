import styled from "styled-components";

export const SearchBox = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.25rem;
  padding-left: 2rem;
  font-size: 2rem;
  margin-top: 2rem;
  border: none;
  box-sizing: border-box;
  color: #838383;

  &:focus {
    outline: none;
    border: solid 2px;
  }
`;
