import styled, { css } from "styled-components";

export const Container = styled.button`
  /* min-width: 15rem; */
  &[disabled] {
    cursor: not-allowed;
    background: var(--color-tertiary-2);

    &:hover {
      color: var(--color-white);
    }
  }

  width: ${({ width }) =>
    width
      ? css`
          ${width}px
        `
      : css`100%`};
  height: 45px;
  border-radius: 4px;
  box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.3);
  font-size: 24px;
  border: 0;
  cursor: pointer;
  transition: transform 0.4s;
  align-items: flex-end;

  font-family: "mukta", 20px;

  color: white;
  background: var(--color-secondary-3);

  :hover {
    color: var(----color-gray-5);
    transform: translateY(-4px);
  }

  :active {
    transform: translateY(4px);
  }

  //botão fundo rosa
  ${({ primary }) =>
    primary &&
    css`
      color: white;
      background: var(--color-tertiary-3);
      &:hover {
        background: var(--color-tertiary-2);
      }
    `}

  //botão fundo verde
  ${({ secondary }) =>
    secondary &&
    css`
      color: white;
      background: var(--color-primary-3);

      &:hover {
        background: var(--color-primary-2);
      }
    `}
//botão fundo cinza borda rosa
  ${({ tertiary }) =>
    tertiary &&
    css`
      color: var(--color-tertiary-3);
      background: var(--color-white);
      border: 2px solid var(--color-tertiary-3) !important;

      &:hover {
        color: var(--color-tertiary-3);
        background: var(--color-gray-4);
      }
    `}

    //botão verde sucesso
    ${({ success }) =>
    success &&
    css`
      color: var(--color-gray-3);
      background: var(--success);

      &:hover {
        filter: brightness(0.85);
      }
    `}
//botão vermelho
    ${({ negative }) =>
    negative &&
    css`
      color: var(--color-gray-3);
      background: var(--negative);

      &:hover {
        filter: brightness(0.85);
      }
    `}
`;
