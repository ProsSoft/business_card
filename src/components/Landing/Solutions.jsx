import React from 'react';
import { landing } from '../../constants';

const LandingSolutions = () => {
  const { solutions } = landing;
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <h3 className="section__title">Solutions</h3>
        <div className="solutions__wrapper">
          <div className="solutions__icon" />
          <ul className="solutions__list">
            {solutions.map(elem => (
              <li className="solutions__list-item" key={elem.title}>
                <span className="solutions__list-title">{elem.title}</span>
                <span className="solutions__list-description">{elem.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingSolutions;
