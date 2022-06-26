// to do styles
import styled from "styled-components"


export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  

 
 

  form{
    width: 22rem;
    margin-top: 117px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    

    h2 {
      ::first-letter {
        font-weight: 700;
      }
       margin-top: 2.25rem; 
       margin-bottom: 0.5rem;
       
      text-align: center;
      font-size: 3rem;
      font-weight: 400;
      font-family: "Mukta", sans-serif;
      color: var(--color-tertiary-3);
      span {
        ::first-letter {
          font-weight: 700;
        }
        display: inline-block;
        color: var(--color-primary-3);
      }
    }

    hr{
      margin: 0 auto;
      width: 90%;
      border: 0.5px solid #C5C5C5;

    }

    > div {
      width: 330px;
      //margin-top: 0.87rem;
      display: flex;
      flex-direction: column;
      text-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.2);
     
      div {
        padding-left: 12px;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-size: 15px;
        border: 1px solid var(--color-gray-4);
        border-radius: 32px;
        background: var(--color-gray-2);
      }

      p{
        font-weight: 600;
        font-size: 14px;
        color: var(--color-gray-5);
        margin-left: 10px;
        margin-bottom: 8px;
        margin-top: 10px;
      }

      svg {
        width: 20.88px;
        height: 20px;
        stroke-width: 3px;
        color: var(--color-gray-5);
      }
      input {
        flex: 1 0 auto;
        padding: 13px 10px 12px 10px;
        background: transparent;
        outline: none;
        border: none;
        font-style: italic;
        font-weight: 200;
        font-size: 18px;
        color: #606060;
      }
      span {
        margin-top: 3px;        
        font-size: 14px;
        padding-left: 10px;
        color: var(--negative);
        font-style: italic;
      }
    }

    .barOr{
      display: flex;
      flex-direction: row;
      align-items: center;
      p{
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
      }

      p{
        margin: 9px;
      }

      hr{        
        height: fit-content;
        width: 50%;
      }
    }

    button{
      width: 330px;
      height: 45px;
      margin: 14px;
      font-weight: 500;
      font-size: 24px;
      
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

    }

    .primaryButton{
      margin-top: 39px;
      background: var(--color-secondary-3);
      color: #ffffff;
      border: 2px solid #68D3F1;
    }

    .secundaryButton{
      margin-top: 14px;
      background: #FFFFFF;
      color: #EB92D6;
      border: 3px solid #EB92D6;
      margin-bottom: 86px;
    }
  }
`;