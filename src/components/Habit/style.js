import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;

  > div:nth-of-type(3) {
    > div {
      height: auto;

      form {
        display: flex;
        flex-flow: column nowrap;
        padding: 3%;
        width: 100%;

        button {
          margin-top: 1%;
        }

        > div:nth-of-type(5) {
          div {
            padding: 5%;
            input {
              padding: 0;
              width: 70%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 85%;
    justify-content: flex-start;
  }
`;

export const HabitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 85%;
  height: 80%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    height: 90%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5%;
  }

  div:nth-of-type(1) {
    > span {
      color: var(--color-primary-3);
    }

    > div > h1 {
      color: var(--color-gray-5);
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      margin: 2% 0%;
    }
  }

  div:nth-of-type(2) {
    width: 60%;
    height: 70%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    color: var(--color-secondary-3);

    h1 {
      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
    }

    h2 {
      font-size: 1.5rem;
      color: var(--color-primary-3);
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    span {
      color: var(--color-gray-5);
    }

    > div {
      display: flex;
      justify-content: space-evenly;
      width: 100%;

      button {
        margin: 2% 0;
        width: 20vw;

        @media (max-width: 850px) {
          width: auto;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      width: 95%;
    }
  }
`;
