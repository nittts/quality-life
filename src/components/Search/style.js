import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 240px;
  height: 45px;
  background-color: var(--color-gray-3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Mukta";
  //box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(217, 217, 217, 0.3);

  input,
  button {
    border: none;
    background: none;
  }

  input {
    width: 90%;
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
    width: 10%;
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
