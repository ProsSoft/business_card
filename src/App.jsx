import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Portfolio from './components/Portfolio/index'
import Header from './components/Header';
import Footer from './components/Footer';

const FourOhFour = () => <h1 style={{ textAlign: 'center', color: '#b4b4b4' }}>The page is not found!</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
