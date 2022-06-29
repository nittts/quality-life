import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 2% 0%;

  svg {
    font-size: 2rem;
    margin: 1%;
    transition: 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      color: var(--color-tertiary-3);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  width: 95%;
  background: ${({ isCompleted }) =>
    isCompleted ? "rgba(128, 217, 174, 0.9)" : "rgba(255, 255, 255, 0.88)"};
  border-radius: 3px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  padding: 1%;
  font-family: "Inter", sans-serif;
  color: var(--color-gray-5);
  font-size: 1rem;

  h1 {
    text-transform: capitalize;
  }

  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: var(--color-tertiary-3);
  }

  @media (max-width: 1000px) {
    font-size: 0.5rem;
  }
`;
