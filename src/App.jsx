import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header'
import Footer from './components/Footer'

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default App;
