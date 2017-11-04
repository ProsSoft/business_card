import React from 'react';
import { landing } from '../constants';

const LandingServices = () => (
  <section className="services">
    <div className="container">
      <h3 className="services__title">Services</h3>
      <div className="services__list">
        {landing.services.map(elem => (
          <span className="services__item" key={elem.title}>
            <span className="services__item-title">{elem.title}</span>
            <div
              className="services__item-icon"
              style={{ backgroundImage: `url(/dist/assets/images/${elem.imgSrc})` }}
            />
            <span className="services__item-description">{elem.description}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LandingServices;
