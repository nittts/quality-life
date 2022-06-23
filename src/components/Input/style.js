import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    span {
      font-size: 12px;
      color: var(--negative);
    }
  }
`;

export const InputContainer = styled.div`
background: var(--color-gray-3);
border-radius: 32px;
color: var(--color-gray-5);
padding: 12px 10px;
text-indent: 24px;
outline: none;
width: 100%;
display: flex;
transition: 0.4s;
${(props) =>
  props.isErrored &&
  css`
    border-color: var(--negative);
    svg {
      color: var(--negative);
    }
  `}
input{
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--color-gray-5);
    &::placeholder{
        color: var(--color-gray-5);
    }
}
svg {
  margin-right: 16px;
}
`;