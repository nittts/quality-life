import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color: var(--color-gray-5);
    font-size: 1.6rem;
    margin-top: 15vh;
    margin-left: 10vw;
    text-align: center;
  }

  img {
    margin-left: 10vw;
    width: 50vw;
    height: 50vh;
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 10vh;
      font-size: 2.5rem;
      margin-left: 5vw;
    }

    img {
      margin-left: 5vw;
    }
  }
`;
