import React from 'react';
import { landing } from '../constants';

const LandingSolutions = () => {
  const { solutions } = landing;
  return (
    <section className="solutions">
      <div className="container">
        <h3 className="solutions__title">Our Solution</h3>
        <div className="solutions__wrapper">
          <span className="solutions__icon" />
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
