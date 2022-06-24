import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #606060;

  p {
    line-height: 1.5;
  }

  p > span {
    font-style: italic;
  }

  Button {
    margin: 50px 0;
  }

  Button:hover {
    color: #606060;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 480px) {
    p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
    div {
      flex-direction: row;
    }

    Button {
      margin: 50px 20px;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin: 100px 0 50px;
  white-space: nowrap;
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
    h1 {
      font-size: 7rem;
    }
  }
`;
