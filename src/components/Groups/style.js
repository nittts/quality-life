import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15vw;
  height: 60vh;
  @media (min-width: 768px) {
    margin-left: 5vw;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 10px;
  Button {
    width: 240px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`;

export const ButtonsBotContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  padding: 20px;
  gap: 10px;
  Button {
    width: 240px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 100px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  margin-left: 15vw;
  width: 90vw;
  height: 60vh;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    width: 75vw;
    margin-left: 5vw;
  }
`;
