import React from 'react';
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <>
      <Header />

      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="1" />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th aria-label="2" />
            </tr>
          </thead>

          <tbody>
            {cart.map((product) => (
              <tr>
                <td>
                  <img src={product.image_url} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <FaMinusCircle size={20} color="var(--brown)" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <FaPlusCircle size={20} color="var(--brown)" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <FaTrash size={20} color="var(--brown)" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <Button>Finalizar Pedido</Button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
