import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* -shadow: */
  button {
    min-width: 15rem;
    height: 3rem;
    border-radius: 1px;
    box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.3);
    font-size: 23px;
    border: 0;
    cursor: pointer;
    border-radius: 32px;
    transition: transform 0.4s;
    align-items: flex-end;

    font-family: "mukta", 20px;

    color: white;
    background: var(--color-secondary-3);

    :hover {
      transform: translateY(-4px);
    }

    :active {
      transform: translateY(4px);
    }
  }

  button.rose {
    color: white;
    background: var(--color-tertiary-3);
  }
  button.green {
    color: white;
    background: var(--color-primary-3);
  }
  button.white {
    color: var(--color-tertiary-3);
    background: var(--color-gray-2);
    border-color: var(--color-tertiary-3);
  }
`;
