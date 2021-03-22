import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
    trade_name,
    business_identification,
    company_name,
    address,
    telephone,
    legal_representative,
    password,
  }) {
    dispatch(
      signUpRequest(
        trade_name,
        business_identification,
        company_name,
        address,
        telephone,
        legal_representative,
        password
      )
    );
  }

  const schema = Yup.object().shape({
    trade_name: Yup.string().required('O nome fantasia é obrigatório'),
    business_identification: Yup.string().required('O CNPJ é obrigatório'),
    company_name: Yup.string().required('A razão social é obrigatória'),
    address: Yup.string().required('O endereço é obrigatório'),
    telephone: Yup.string().required('O telefone é obrigatório'),
    legal_representative: Yup.string().required('O responsável é obrigatório'),
    password: Yup.string()
      .min(6, 'No mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  return (
    <Container>
      <div>
        <div>
          <img src={logo} alt="SMT Marketplace" />
          <span>SMT Marketplace</span>
        </div>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="trade_name" placeholder="Nome fantasia" />
          <Input name="business_identification" placeholder="CNPJ" />
          <Input name="company_name" placeholder="Razão social" />
          <Input name="address" placeholder="Endereço" />
          <Input name="telephone" placeholder="Telefone" />
          <Input name="legal_representative" placeholder="Responsável" />
          <Input name="password" type="password" placeholder="Senha" />

          <button type="submit">Criar conta</button>

          <Link to="/shop/signin">Já tenho login</Link>
        </Form>
      </div>
    </Container>
  );
}
