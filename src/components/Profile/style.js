import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.3%;
  width: 100%;
  font-style: "Inter", sans-serif;

  > div:nth-of-type(1) {
    background-color: var(--color-gray-5);
    border: 0.3rem solid #fff;
    transition: all 0.2s;

    :hover {
      background-color: var(--color-tertiary-3);
      cursor: pointer;
    }
  }
  h1 {
    display: flex;
    flex-flow: column nowrap;
    font-size: 2rem;
    margin-left: 1%;
    color: var(--color-gray-5);
    width: 100%;

    span {
      font-size: 0.8rem;
    }
  }
`;
