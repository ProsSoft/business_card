import React from 'react';
import { landing } from '../constants';

const listRender = list =>
  list.map(elem => (
    <div className="services__item" key={elem.title}>
      <span className="services__item-title">{elem.title}</span>
      <span className="services__item-icon" style={{ backgroundImage: `url(/dist/assets/images/${elem.imgSrc})` }} />
      <span className="services__item-description">{elem.description}</span>
    </div>
  ));

const LandingServices = () => {
  const { services } = landing;

  return (
    <section className="services">
      <h3 className="services__title">Services</h3>
      {listRender(services)}
    </section>
  );
};

export default LandingServices;
