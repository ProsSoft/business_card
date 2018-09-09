import React from 'react';
import Hero from '../common/Hero';
import { careers } from '../../constants';

const { hero, offers } = careers;

export default () =>
  <div>
    <Hero {...hero} />
    <h3 className="section__title">Careers</h3>
    {offers.map(({ position, description, typicalDuties }) =>
      <div>
        <h3>{position}</h3>
      </div>)}
  </div>
