import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.2);

  label {
    color: var(--color-gray-5);
    font-weight: 600;
    text-indent: 12px;
    font-size: 13px;
    margin-bottom: 3px;
  }

  div:nth-child(3) {
    span {
      font-size: 12px;
      color: var(--negative);

      margin-top: 3px;
      font-size: 12.5px;
      padding-left: 12px;
      color: var(--negative);
      font-style: italic;
    }
  }
`;

export const InputContainer = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
  border: 1px solid var(--color-gray-4);
  border-radius: 32px;
  color: var(--color-gray-5);
  background: var(--color-gray-3);
  outline: none;
  transition: border 0.7s ease-in-out;

  input {
    flex: 1 0 auto;
    padding: 13px 10px 12px 10px;
    background: transparent;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: 100;

    :-webkit-autofill {
      -webkit-background-clip: text;
    }
  }

  svg {
    stroke-width: 3px;
    color: var(--color-gray-5);
    transition: color 0.7s ease-in-out;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: var(--negative);
      svg {
        color: var(--negative);
      }
    `}
`;
