import styled, { css } from "styled-components";

export const Container = styled.button`
  min-width: 15rem;
  height: 3rem;
  border-radius: 1px;
  box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.3);
  font-size: 23px;
  border: 0;
  cursor: pointer;
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

  ${({ primary }) =>
    primary &&
    css`
      color: white;
      background: var(--color-tertiary-3);
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: white;
      background: var(--color-primary-3);
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      color: var(--color-tertiary-3);
      background: var(--color-gray-2);
      border: 2px solid var(--color-tertiary-3) !important;
    `}

    ${({ success }) =>
    success &&
    css`
      color: var(--color-gray-3);
      background: var(--success);
    `}

    ${({ negative }) =>
    negative &&
    css`
      color: var(--color-gray-3);
      background: var(--negative);
    `}
`;
