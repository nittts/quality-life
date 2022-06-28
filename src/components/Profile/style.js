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
    width: 3.2rem;
    height: 3.2rem;

    @media (min-width: 768px) {
      width: 3.5rem;
      height: 3.5rem;
    }

    :hover {
      background-color: var(--color-tertiary-3);
      cursor: pointer;
    }
  }

  h1 {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.5rem;
    margin-left: 0.5%;
    color: var(--color-gray-5);
    width: 80%;
    height: 3.2rem;
    span {
      font-size: 0.7rem;
    }
  }

  .body-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 36px;
    padding: 40px;

    input {
      min-width: 300px;
    }
  }

  .footer-form {
    padding-right: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 17px;
    padding-bottom: 40px;
    /* background: red; */
  }
`;
