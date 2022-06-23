// to do styles
import styled from "styled-components";

export const Container = styled.div`
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";
  }

  &::before {
    background: linear-gradient(
      135deg,
      var(--color-primary-2),
      var(--color-primary-3)
    );
    clip-path: circle(28% at left top);
  }

  &::after {
    background: linear-gradient(
      var(--color-secondary-3),
      var(--color-secondary-2)
    );
    clip-path: circle(28% at right bottom);
  }

  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-2);

  form {
    z-index: 1;
    width: 320px;
    padding: 32px 32px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    background: #fff;
    border-radius: 10px;

    transition: box-shadow 0.35s ease-in-out;

    box-shadow: 0 6px 2px 1px rgba(0, 0, 0, 0.1);

    h2 {
      ::first-letter {
        font-weight: 700;
      }
      /* margin-top: 32px; */
      text-align: center;
      font-size: 2.5rem;
      font-weight: 400;
      font-family: "Mukta", sans-serif;
      color: var(--color-tertiary-3);

      span {
        ::first-letter {
          font-weight: 700;
        }
        display: inline-block;
        color: var(--color-primary-3);
      }
    }

    > div {
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

      div {
        padding-left: 12px;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-size: 15px;
        border: 1px solid var(--color-gray-4);
        border-radius: 32px;
        background: var(--color-gray-2);
      }

      svg {
        stroke-width: 3px;
        color: var(--color-gray-5);
      }

      input {
        flex: 1 0 auto;
        padding: 13px 10px 12px 10px;
        background: transparent;
        outline: none;
        border: none;
        font-size: 18px;
        font-weight: 100;
      }

      span {
        margin-top: 3px;
        font-size: 12.5px;
        padding-left: 10px;
        color: var(--negative);
        font-style: italic;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      min-width: 180px;
      padding: 12px 10px;
      border-radius: 4px;
      font-size: 16px;
      border: 0;
      cursor: pointer;
      transition: transform 0.4s;

      :hover {
        transform: translateY(-4px);
      }

      :active {
        transform: translateY(4px);
      }
    }

    button.primary {
      color: var(--color-gray-2);
      font-weight: 500;
      background: var(--color-tertiary-3);

      :hover {
        color: var(--color-gray-5);
        background: var(--color-tertiary-2);
      }
    }

    hr {
      border: 0;
      border-top: 1px solid var(--color-gray-4);
    }

    hr:first-of-type {
      margin-bottom: 8px;
    }

    hr:last-of-type {
      margin: 8px 0;
    }

    p {
      font-size: 14px;
      text-align: center;
      font-family: "Mukta", sans-serif;

      a {
        font-weight: 600;
        color: var(--color-tertiary-3);
      }
    }
  }
`;
