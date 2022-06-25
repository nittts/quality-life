import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  margin: 1% 0%;

  svg {
    font-size: 1.5rem;
    width: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  width: 95%;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 2px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  padding: 1%;
  font-family: "Inter", sans-serif;
  color: var(--color-gray-5);
`;
