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
export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-flow: row nowrap;
  width: 85%;
  height: 10%;
  padding: 0% 2%;

  @media (max-width: 768px) {
    align-items: center;
    height: 15%;
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 85%;
  height: 75%;
  background: rgba(255, 255, 255, 0.83);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    height: 90%;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    margin-top: 5%;
  }
`;
