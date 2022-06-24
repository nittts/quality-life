// to do styles
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
