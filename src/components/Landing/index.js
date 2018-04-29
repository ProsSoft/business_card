/* eslint-disable react/prop-types,react/jsx-no-bind,no-return-assign,no-param-reassign,prefer-destructuring,consistent-return */
import React from 'react';

import { scrollTo } from './util';
import Hero from './Hero';
import Services from './Services';
import Solutions from './Solutions';
import Contacts from './Contacts';

class Landing extends React.Component {
  componentWillReceiveProps({ match: { params: { section } } }){
    scrollTo(section);
  }
  componentDidMount() {
    const { match: { params: { section } } } = this.props;
    scrollTo(section);
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="landing">
        <Hero />
        <Services />
        <Solutions />
        <Contacts />
      </div>
    );
  }
}

export default Landing;
