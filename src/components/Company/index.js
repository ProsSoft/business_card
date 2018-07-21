import React from 'react';
import Hero from '../common/Hero';
import { company } from '../../constants';

export default () =>
  <div>
    <Hero {...company.hero} />
  </div>
