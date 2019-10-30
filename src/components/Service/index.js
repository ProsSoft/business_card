/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import $ from 'jquery';

import Hero from '../common/Hero';

import { service, landing, imagesUrl } from '../../constants';

const { services } = landing;

const { hero } = service;

class Service extends Component {
  state = {
    src: 0,
    deltaY: 0
  };
  render() {
    const { match: { params: { type }} } = this.props;
    const { title } = services.find(({link}) => link === `/${type}`);
    const { src, timestamp, deltaY: prevDeltaY } = this.state;

    return (
      <div className="service">
        <Hero
          {...hero}
          noBack
          title1={title}
        />
        <img
          id="service-stage-img"
          alt="tree-images"
          src={`${imagesUrl}service_stages/stage${src}.jpg`}
          onWheel={({ deltaY }) => {
            const x = window.scrollX;
            const y = window.scrollY;
            window.onscroll = () => window.scrollTo(x, y);
            const newTimestamp = performance.now();
            this.setState({ timestamp: newTimestamp, deltaY: deltaY + prevDeltaY });
            if (newTimestamp - timestamp > 170) {
              console.log('works', prevDeltaY);
              const isDeltaYDecreased = this.state.deltaY < 0;
              if (!isDeltaYDecreased && src) {
                this.setState({ src: src - 1 })
              } else if (isDeltaYDecreased && src < 6) {
                this.setState({ src: src + 1 })
              }
              this.setState({ deltaY: 0 });
            }
          }}
          onMouseOut={() => {
            window.onscroll = () => {};
          }}
        />
      </div>);
  }
}

export default Service;
