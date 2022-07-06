import styled from "styled-components";

export const Container = styled.div`
  width: ${({ Extends }) => (Extends ? "10vw" : "5vw")};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.2s ease-in-out;

  @media (max-width: 1100px) {
    width: ${({ Extends }) => (Extends ? "15vw" : "5vw")};
  }

  @media (max-width: 768px) {
    width: ${({ Extends }) => (Extends ? "25vw" : "15vw")};
  }

  @media (max-width: 425px) {
    width: ${({ Extends }) => (Extends ? "45vw" : "15vw")};
  }

  @media (max-width: 321px) {
    width: ${({ Extends }) => (Extends ? "50vw" : "15vw")};
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
    flex-flow: column nowrap;
    margin: 2% 0%;
    height: 10%;
    width: 100%;

    svg {
      font-size: 2rem;
    }

    h2 {
      text-align: center;
      width: 100%;

      @media (max-width: 600px) {
        font-size: 1rem;
      }

      @media (min-width: 600px) {
        font-size: 1rem;
      }
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

  h2 {
    font-size: 2rem;
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
