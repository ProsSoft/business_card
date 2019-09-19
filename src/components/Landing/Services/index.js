/* eslint-disable react/prop-types */
import React from 'react';
 import { Link } from 'react-router-dom';

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
        <h3 className="section__title">Services</h3>
        <div className="services__list">
          {landing.services.map(({ title, description, link}, index) => (
            <span className="services__item" key={title}>
              <span className="services__item-title">{title}</span>
              <Link   to={`/services${link}`}
                 //
                className="services__item-icon"
              >
                {svgIcon(index)}
              </Link>
              <span className="services__item-description">{description}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
