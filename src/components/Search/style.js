import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 280px;
  height: 45px;
  background-color: #dfdfdf;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Mukta";

  input,
  button {
    border: none;
    background: none;
  }

  input {
    width: 250px;
    height: 45px;
    font-size: 18px;
    padding-left: 10px;
    font-weight: 200;
  }

  input::placeholder {
    color: var(--color-grey-5);
  }

  button {
    display: flex;
    align-items: center;
  }

  button:hover {
    cursor: pointer;
  }

  input:focus,
  input::selection,
  input:active {
    border: none;
    outline: none;
  }
`;
