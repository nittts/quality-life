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
    clip-path: circle(20% at left top);
  }

  &::after {
    background: linear-gradient(
      var(--color-secondary-3),
      var(--color-secondary-2)
    );
    clip-path: circle(20% at right bottom);
  }

  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-tertiary-2);

  form {
    z-index: 1;
    width: 320px;
    padding: 32px 32px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    position: relative;

    background: #fff;
    border-radius: 10px;

    transition: box-shadow 0.35s ease-in-out;

    :hover {
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }

    > a {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 100px;
      text-align: center;
      font-size: 14px;
      border-radius: 4px;
      padding: 5px;
      color: var(--color-secondary-3);
      border: 2px solid var(--color-secondary-3);
      transition: all 0.3s ease;

      :hover {
        color: var(--color-white);
        background: var(--color-secondary-2);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      }
    }

    h2 {
      ::first-letter {
        font-weight: 700;
      }
      margin-top: 32px;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 300;
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
      position: relative;

      display: flex;
      flex-direction: column;
      text-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.2);

      svg {
        position: absolute;
        top: 18px;
        left: 13px;
        stroke-width: 3px;
        color: var(--color-tertiary-3);
      }

      input {
        padding: 12px 10px;
        text-indent: 24px;
        font-size: 15px;
        border: 1px solid var(--color-gray-4);
        border-radius: 32px;
        background: var(--color-gray-2);
        outline: none;
      }

      span {
        margin-top: 3px;
        font-size: 13px;
        padding-left: 10px;
        color: var(--color-tertiary-3);
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      min-width: 180px;
      padding: 12px 10px;
      border-radius: 5px;
      font-size: 16px;
      border: 0;
      cursor: pointer;
      border-radius: 32px;
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
      margin-top: 8px;
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
