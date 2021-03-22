import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

const schema = Yup.object().shape({
  business_identification: Yup.string().required('O CNPJ é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ business_identification, password }) {
    dispatch(signInRequest(business_identification, password));
  }

  return (
    <Container>
      <div>
        <div>
          <img src={logo} alt="SMT Marketplace" />
          <span>SMT Marketplace</span>
        </div>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="business_identification" placeholder="CNPJ" />
          <Input name="password" type="password" placeholder="Senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

          <Link to="/shop/signup">Criar conta</Link>
        </Form>
      </div>
    </Container>
  );
}
