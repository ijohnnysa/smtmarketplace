import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Header, ProductList } from './styles';

export default function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Header>
        <Link to="/shop/my-products">
          <img src={logo} alt="SMT Marketplace" />
          <span>SMT Marketplace</span>
        </Link>

        <div>
          <Link to="/shop/my-products">Meus Produtos</Link>
          <Link to="/shop/new-product">Novo Produto</Link>
          <Link to="/shop/account">Minha Conta</Link>
        </div>
      </Header>

      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image_url} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
          </li>
        ))}
      </ProductList>
    </>
  );
}
