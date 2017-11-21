/* eslint-disable react/prop-types */
import React from 'react';

import scrollIt from '../utils';
import {fixedHeaderHeight} from '../constants'
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

  render() {
    return (
      <div className="landing">
        <LandingHero
          scrollElem={el => {
            this.scrollTop = el;
          }}
        />
        <LandingServices
          scrollElem={el => {
            this.scrollServices = el;
          }}
        />
        <LandingSolutions />
        <LandingContact
          scrollElem={elem => {
            this.scrollContact = elem;
          }}
        />
      </div>
    );
  }
}

export default Landing;
