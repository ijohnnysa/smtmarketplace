import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Button from '../../components/Button';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('items');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <>
      <Header />

      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image_url} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <div>
              Vendido e entregue por <strong>{product.shop.trade_name}</strong>
            </div>

            <Button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <FaCartPlus size={16} color="var(--white)" />{' '}
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </Button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
