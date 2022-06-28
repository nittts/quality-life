import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }

  > div:nth-of-type(3) {
    > div {
      height: 90%;
      width: 50%;
    }
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

export const HabitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 85%;
  height: 80%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  > div {
    height: 90%;
    width: 95%;
  }

  > button {
    position: absolute;
    right: 0;
    top: 0;
    margin: 2% 3.5%;
    width: auto;
    padding: 0% 2%;
    background-color: var(--color-primary-3);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 90%;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    margin-top: 5%;
  }
`;
