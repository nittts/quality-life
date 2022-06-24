import styled from "styled-components";

export const Container = styled.div`
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
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

  background-color: red;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  background-color: yellow;
  width: 85%;
  height: 15%;
  padding: 2%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 85%;
  background-color: lime;
  height: 70%;

  @media (max-width: 768px) {
    width: 100%;
    height: 85%;
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }

  > div {
    background-color: blue;
    height: 90%;
    width: 45%;
    margin: 2%;

    @media (max-width: 768px) {
      width: 100%;
      margin: 2% 0%;
    }
  }
`;
