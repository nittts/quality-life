import styled from "styled-components";

export const ModalContainer = styled.div`
  align-self: center;
  width: 65vw;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  width: 90vw;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  > h1 {
    text-align: center;
    width: 100%;
    color: var(--color-secondary-3);
    font-size: calc(1rem + 2vw);
  }

  > p {
    font-size: 1rem;
    margin: 1%;
    color: var(--color-gray-5);
  }

  @media (min-width: 768px) {
    width: 75vw;
  }

  margin-bottom: 3%;

  > div {
    z-index: 100;
  }
`;
export const Content = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    width: 85%;
    justify-content: flex-end;
  }

  h1 {
    color: var(--color-tertiary-3);

    :hover {
      cursor: pointer;
    }
  }

  > div {
    border-radius: 4px;
  }

  > div:nth-of-type(1) {
    width: clamp(150px, 50%, 250px);
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    h1 {
      display: flex;
      align-items: center;
    }

    p {
      font-size: 0.8rem;
      color: var(--color-gray-5);
    }
  }

  > div:nth-of-type(3) {
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-end;
    }

    > div {
      margin: 1%;
      display: flex;
      flex-direction: column;
      min-height: 250px;

      > div {
        width: 95%;
        height: 100%;

        li {
          margin: 1%;
          padding: 1%;

          h1 {
            transition: 0.2s ease-in-out;
            color: var(--color-gray-5);
          }
          :hover {
            h1 {
              color: var(--color-tertiary-3);
            }
          }
        }
      }
    }
  }

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const CreatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
`;

export const GoalsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  width: 85%;
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
`;

export const HabitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  width: 85%;
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
`;

export const UsersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0.5% 0%;
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

  > div {
    display: flex;
    flex-direction: column;
    min-height: 250px;
    max-height: 400px;
    width: 100%;

    > div {
      width: 95%;
      height: 100%;

      li {
        margin: 1%;
        padding: 1%;
        h1 {
          transition: 0.2s ease-in-out;
          color: var(--color-gray-5);
        }
        :hover {
          h1 {
            cursor: auto;
            color: var(--color-tertiary-3);
          }
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 20px;
  gap: 10px;

  Button {
    width: 25%;

    :hover {
      color: white;
    }

    :disabled {
      filter: brightness(0.95);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  button:nth-of-type(2) {
    :disabled {
      background: var(--color-primary-2);
    }
  }

  button:nth-of-type(3) {
    :disabled {
      background-color: var(--color-secondary-2);
    }
  }

  button:nth-of-type(4) {
    :disabled {
      background-color: var(--success);
    }
  }

  button:nth-of-type(5) {
    :disabled {
      background-color: var(--negative);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    column-gap: 100px;
    align-items: center;
  }
`;
