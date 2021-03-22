import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      margin-top: 20px;
      width: 100%;
      max-width: 576px;
      text-align: center;

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
          cursor: not-allowed;

          &:hover {
            background: ${darken(0.03, '#3b9eff')};
          }
        }
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  a img {
    width: 60px;
    margin-right: 12px;
  }

  a span {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--white);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 12px;
      font-size: 16px;
      font-weight: 500;
      color: var(--white);
      text-transform: uppercase;
    }

    a:nth-child(3) {
      cursor: not-allowed;
    }
  }
`;
