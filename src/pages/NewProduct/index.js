import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';

import { Container, Header } from './styles';

export default function NewProduct() {
  const schema = Yup.object().shape({
    title: Yup.string().required('O titulo é obrigatório'),
    price: Yup.string().required('O preço é obrigatorio'),
  });

  return (
    <Container>
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

      <div>
        <div>
          <Form schema={schema}>
            <Input name="title" placeholder="Nome do produto" />
            <Input name="price" placeholder="Preço" />

            <button type="submit">Cadastrar produto</button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
