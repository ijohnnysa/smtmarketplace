import styled from 'styled-components';

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

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 260px;
      border-radius: 4px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0;
    }
  }
`;
