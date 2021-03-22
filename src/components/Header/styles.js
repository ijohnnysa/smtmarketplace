import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
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
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: var(--white);
    }

    span {
      font-size: 12px;
      color: var(--blue);
    }
  }
`;
