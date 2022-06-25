import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--color-gray-5);
  font-family: "Mukta", sans-serif;

  p {
    line-height: 1.5;
    font-size: 18px;
    margin: 10px 0 50px;
    letter-spacing: 1px;
    font-weight: 200;
  }

  p > span {
    font-style: italic;
  }

  a {
    margin: 40px 10px;
    text-decoration: none;
  }

  a:hover {
    color: var(--color-gray-5);
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 480px) {
    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    div {
      flex-direction: row;
    }

    p {
      margin: 0;
      font-size: 3rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin: 80px 0 50px;
  white-space: nowrap;
  font-family: "Mukta", sans-serif;

  h1 {
    font-size: 3rem;
    font-family: "Mukta";
    color: var(--color-tertiary-3);
    font-weight: 400;
    ::first-letter {
      font-weight: 700;
    }

    span {
      display: inline-block;
      color: var(--color-primary-3);
      font-family: "Mukta";
      font-weight: 400;
      ::first-letter {
        font-weight: 700;
      }
    }
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (min-width: 768px) {
    margin: 0 0 50px;
    h1 {
      font-size: 7.2rem;
    }
  }
`;
