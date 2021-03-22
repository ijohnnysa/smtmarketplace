import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin-top: 20px;
    width: 100%;
    max-width: 576px;
    text-align: center;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 120px;
        margin-right: 20px;
      }

      span {
        font-family: 'Montserrat', sans-serif;
        font-size: 32px;
        font-weight: 700;
        color: var(--white);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }

      span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#3b9eff')};
        }
      }

      a {
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
