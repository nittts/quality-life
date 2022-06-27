import styled from "styled-components";

export const Container = styled.div`
  h2 {
    text-align: center;
    margin: 10px 0 20px 15vw;
  }

  @media (min-width: 768px) {
    h2 {
      margin: 10px 0 20px 5vw;
    }
  }
`;

export const DevsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
