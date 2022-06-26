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

    hr {
      border: 0;
      border-top: 1px solid var(--color-gray-4);
    }

    hr:first-of-type {
      margin-bottom: 8px;
    }

    .barOr {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
      }

      p {
        margin: 9px;
      }

      hr {
        height: fit-content;
        width: 50%;
        transform: translateY(2px);
      }

      hr:last-of-type {
        transform: translateY(-1px);
      }
    }

    button:first-of-type {
      margin-top: 10px;
    }
  }
`;
