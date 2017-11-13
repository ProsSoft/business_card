import React from 'react';

import LandingServicesIcon1 from './LandingServicesIcon1';
import LandingServicesIcon2 from './LandingServicesIcon2';
import LandingServicesIcon3 from './LandingServicesIcon3';
import { landing } from '../constants';

const LandingServices = () => {
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
    <section className="services" id="services-part">
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
