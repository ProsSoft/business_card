import React from 'react';
import { /*BrowserRouter,*/ HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing';
import Service from './components/Service';
// import Company from './components/Company';
import Careers from './components/Careers';
import Portfolio from './components/Portfolio';
// import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';

export const FourOhFour = () => <h1 style={{ textAlign: 'center', color: '#b4b4b4' }}>The page is not found!</h1>;

const App = () => (
  <HashRouter basename="/">
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home/:section?" component={Landing} />
        <Route path="/portfolio" component={Portfolio} />
        {<Route path="/services/:type" component={Service} />}
        {/*<Route path="/products" component={Products} />*/}
        {/*<Route path="/product/:name" component={Product} />*/}
        {/*<Route path="/company" component={Company} />*/}
        <Route path="/careers" component={Careers} />
        <Route path="/*" component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
