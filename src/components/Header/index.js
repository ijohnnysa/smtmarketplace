import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="SMT Marketplace" />
        <span>SMT Marketplace</span>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <FaShoppingCart size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
