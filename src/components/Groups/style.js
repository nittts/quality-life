import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15vw;
  /* background: red; */
  @media (min-width: 768px) {
    margin-left: 5vw;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 90vw; */

  @media (max-width: 768px) {
    margin-left: 80px;
  }

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

export const GroupsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  overflow-y: scroll;
  height: 450px;
  background: var(--color-gray-4);
  /* background */
  padding: 40px;
  gap: 24px;

  li {
    flex: 1 1 320px;
    padding: 18px;
    border-radius: 4px;
    background: var(--color-white);
    box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    header {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      h2 {
        font-weight: 700;
        font-size: 24px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
      }

      .category-and-author {
        /* position: absolute;
        right: 18px;
        top: 18px; */
        display: flex;
        flex-direction: column;
        /* align-items: flex-end; */
        font-size: 14px;
      }

      .category {
        color: var(--color-primary-3);
      }

      .author {
        color: var(--color-tertiary-3);
      }
    }

    section {
      padding: 30px 0;

      p {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ButtonsBotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 10px;
  Button {
    width: 240px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    column-gap: 100px;
  }
`;
