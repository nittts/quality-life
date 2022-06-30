import styled from "styled-components";

export const Header = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding: 44px 0;
`;

export const Container = styled.div`
  background: rgba(var(--color-gray-3), 0.6);
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
