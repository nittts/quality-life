import styled from "styled-components";

export const Container = styled.div`
  width: ${({ Extends }) => (Extends ? "15vw" : "5vw")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media (max-width: 768px) {
    width: ${({ Extends }) => (Extends ? "60vw" : "15vw")};
  }
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
  border: 1px solid rgba(240, 240, 240, 0.3);
`;

export const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  height: 90%;
  list-style-type: none;
  padding: 2%;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    margin: 5% 0%;
    height: 10%;
    width: 100%;

    svg {
      width: ${({ Extends }) => (Extends ? "40%" : "100%")};
      font-size: 2.5rem;
    }

    h2 {
      text-align: left;
      width: 60%;
    }

    p {
      font-size: 1rem;
    }

    :hover {
      cursor: pointer;
      color: var(--color-gray-5);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  white-space: nowrap;

  h1 {
    font-size: 2.8rem;
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
      font-weight: 200;

      ::first-letter {
        font-weight: 700;
      }
    }
  }

  :hover {
    cursor: pointer;
  }
`;
