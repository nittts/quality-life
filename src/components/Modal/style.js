// to do styles
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Content = styled.div`
  /* width: 50%; */
  /* height: 90%; */
  background: rgba(217, 217, 217, 1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(217, 217, 217, 0.3);

  @media (max-width: 767px) {
    width: 95%;
    height: 95%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  width: 100%;
  height: 10%;

  background: rgba(240, 240, 240, 1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(240, 240, 240, 0.3);

  h1 {
    color: var(--color-gray-5);
  }

  button {
    min-width: 10%;
    border-radius: 8px;
    font-weight: 700;
  }
`;
