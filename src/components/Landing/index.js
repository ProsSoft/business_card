/* eslint-disable react/prop-types,react/jsx-no-bind,no-return-assign,no-param-reassign,prefer-destructuring,consistent-return */
import React from 'react';

import Hero from '../common/Hero';
import Services from './Services';
import Solutions from './Solutions';
import Contacts from './Contacts';
import { scrollTo } from './util';
import { landing } from '../../constants';

class Landing extends React.Component {
  componentWillReceiveProps({ match: { params: { section } } }) {
    scrollTo(section);
  }
  componentDidMount() {
    const { match: { params: { section } } } = this.props;
    scrollTo(section, true);
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { hero, contactUs } = landing;
    return (
      <div className="landing">
        <Hero {...hero} />
        <Services />
        <Solutions />
        <Contacts {...contactUs} />
      </div>
    );
  }
}

export default Landing;
