import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Products from './components/Products'
import Product from './components/Product'
import Header from './components/Header';
import Footer from './components/Footer';

export const FourOhFour = () => <h1 style={{ textAlign: 'center', color: '#b4b4b4' }}>The page is not found!</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/products" component={Products} />
        <Route path="/product/:name" component={Product} />
        <Route path="/*" component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
