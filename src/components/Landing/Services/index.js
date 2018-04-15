/* eslint-disable react/prop-types */
import React from 'react';

import LandingServicesIcon1 from './Icon1';
import LandingServicesIcon2 from './Icon2';
import LandingServicesIcon3 from './Icon3';
import { landing } from '../../../constants';

const LandingServices = (props) => {
  const svgIcon = index => {
    switch (index) {
      case 0:
        return <LandingServicesIcon1 />;
      case 1:
        return <LandingServicesIcon2 />;
      case 2:
        return <LandingServicesIcon3 />;
      default:
        return <LandingServicesIcon1 />;
    }
  };
  return (
    <section className="services" id="services" ref={props.scrollElem}>
      <div className="container">
        <h3 className="services__title">Services</h3>
        <div className="services__list">
          {landing.services.map((elem, index) => (
            <span className="services__item" key={elem.title}>
              <span className="services__item-title">{elem.title}</span>
              <div className="services__item-icon">{svgIcon(index)}</div>
              <span className="services__item-description">{elem.description}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
