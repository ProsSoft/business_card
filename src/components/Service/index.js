import React, { Component } from 'react';
import Hero from '../common/Hero';

import { service, landing } from '../../constants';

const { services } = landing;

const { hero } = service;

class Service extends Component {
  state = {
    src: ''
  };
  render() {
    const { match: { params: { type }} } = this.props;
    const { title } = services.find(({link}) => link === `/${type}`);
    return (
      <div>
        <Hero
          {...hero}
          noBack
          title1={title}
        />
        <img src={this.state.src} />
      </div>);
  }
}

export default Service;
