import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

import MyProducts from '../pages/MyProducts';
import NewProduct from '../pages/NewProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />

      <Route path="/shop/signin" component={SignIn} />
      <Route path="/shop/signup" component={SignUp} />

      <Route path="/shop/my-products" component={MyProducts} isPrivate />
      <Route path="/shop/new-product" component={NewProduct} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
