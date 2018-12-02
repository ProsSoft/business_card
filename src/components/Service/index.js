import React, { Component } from 'react';
import $ from 'jquery';

import Hero from '../common/Hero';

import { service, landing, imagesUrl } from '../../constants';

const { services } = landing;

const { hero } = service;

class Service extends Component {
  state = {
    src: 0,
    timestamp: 0
  };
  render() {
    const { match: { params: { type }} } = this.props;
    const { title } = services.find(({link}) => link === `/${type}`);
    const { src, timestamp } = this.state;

    return (
      <div className="service">
        <Hero
          {...hero}
          noBack
          title1={title}
        />
        <img
          id="service-stage-img"
          src={`${imagesUrl}service_stages/stage${src}.jpg`}
          onWheel={({ deltaY }) => {
            const x = window.scrollX;
            const y = window.scrollY;
            window.onscroll = () => window.scrollTo(x, y);
            const newTimestamp = performance.now();
            this.setState({ timestamp: newTimestamp });
            // if (newTimestamp - timestamp > 100) {
            console.log(deltaY);
              if (deltaY > 0 && src ) {
                this.setState({ src: src - 1 })
              } else if (deltaY < 0 && src < 6) {
                this.setState({ src: src + 1 })
              }
            // }
          }}
          onMouseOut={() => {
            window.onscroll = () => {};
          }}
        />
      </div>);
  }
}

export default Service;
