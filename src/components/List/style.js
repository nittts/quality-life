import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  height: 95%;
  width: 45%;
  margin: 1%;
  padding: 1%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2% 0%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  scroll-behavior: smooth;
  overflow-y: scroll;
  padding: 1%;

  ::-webkit-scrollbar {
    background: rgba(255, 255, 255, 0.83);
    width: 1.5rem;

    @media (max-width: 768px) {
      width: 1rem;
    }
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-4);
    border-radius: 16px;
    transition: all 0.2s;

    :hover {
      background: var(--color-gray-5);
    }
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.83);
  }
`;

export const Label = styled.h1`
  margin: 0% 2%;
  width: 96%;
  text-align: left;
  font-style: "Mukta";
  color: #141414;
`;
