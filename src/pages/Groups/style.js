import styled from "styled-components";

export const Header = styled.div`
  width: 65vw;
  margin: 0 auto;
  padding: 44px 0;

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  align-self: center;
  justify-content: flex-end;
  background: rgba(var(--color-gray-3), 0.6);
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
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

export const Content = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 85%;
    justify-content: flex-end;
  }
`;
