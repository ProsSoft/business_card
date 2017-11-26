/* eslint-disable react/prop-types,react/jsx-no-bind,no-return-assign,no-param-reassign,prefer-destructuring,consistent-return */
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import scrollIt from '../utils';
import { fixedHeaderHeight } from '../constants';
import LandingHero from './LandingHero';
import LandingServices from './LandingServices';
import LandingSolutions from './LandingSolutions';
import LandingContact from './LandingContact';

class Landing extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { hash } = this.props.location;
    const { hash: nextHash } = nextProps.location;
    if (hash !== nextHash) {
      switch (nextHash) {
        case '':
          scrollIt(this.scrollTop, 300, 'easeOutQuad', fixedHeaderHeight);
          break;
        case '#services':
          scrollIt(this.scrollServices, 300, 'easeOutQuad', fixedHeaderHeight);
          break;
        case '#contacts':
          scrollIt(this.scrollContact, 300, 'easeOutQuad', fixedHeaderHeight);
          break;
        default:
          break;
      }
    }
  }

  onChange = (elem, isVisible) => {
    if (isVisible) {
      document.querySelectorAll(`[href="/#${elem}"]`).forEach(item => {
        item.className = `${item.className} ${item.className}--active`;
      });
    } else {
      document.querySelectorAll(`[href="/#${elem}"]`).forEach(item => {
        item.className = item.className.split(' ')[0];
      });
    }
  };
  render() {
    return (
      <div className="landing">
        <VisibilitySensor partialVisibility>
          <LandingHero
            scrollElem={el => {
              this.scrollTop = el;
            }}
          />
        </VisibilitySensor>
        <VisibilitySensor partialVisibility onChange={this.onChange.bind(null, 'services')}>
          <LandingServices
            scrollElem={el => {
              this.scrollServices = el;
            }}
          />
        </VisibilitySensor>
        <LandingSolutions />
        <VisibilitySensor partialVisibility onChange={this.onChange.bind(null, 'contacts')}>
          <LandingContact
            scrollElem={elem => {
              this.scrollContact = elem;
            }}
          />
        </VisibilitySensor>
      </div>
    );
  }
}

export default Landing;
