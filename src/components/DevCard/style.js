import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: #000;
  list-style-type: none;
  justify-content: center;
  margin-left: 15vw;
  text-align: center;
  gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 14px;
    background: linear-gradient(
      137deg,
      rgba(20, 0, 255, 0.5) 0%,
      rgba(235, 0, 225, 0.5) 100%
    );
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  h2,
  h3,
  h4,
  span {
    margin: 5px 0;
  }

  h4,
  span {
    font-weight: 400;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
    text-decoration: underline;
  }

  h4 {
    font-size: 16px;
  }

  span {
    font-size: 12px;
    font-style: italic;
  }

  img {
    width: 120px;
  }

  svg {
    color: #000;
    margin: 0 10px;
  }

  span:last-child {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    margin-left: 5vw;
    flex-direction: row;

    li {
      padding: 20px 28px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;
