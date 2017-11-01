import React from 'react';
import { landing } from '../constants';

const LandingSolutions = () => {
  const { solutions } = landing;
  return (
    <section className="solutions">
      <h3 className="solutions__title">Our Solution</h3>

      <div className="colutions__icon" />
      <ul className="solutions__list">
        {solutions.map(elem => (
          <li key={elem.title}>
            <span className="solutions__list-title">{elem.title}</span>
            <span className="solutions__list-description">{elem.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LandingSolutions;
