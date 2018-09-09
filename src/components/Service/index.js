import React from 'react';
import Hero from '../common/Hero';
import TreeSVG from './TreeSVG';

import { service } from '../../constants';

const { hero } = service;

const Service = ({ match: { params: { type }} }) =>
  <div>
    <Hero {...hero} noBack />
    <h3 className="section__title">Stages</h3>
    <TreeSVG />
  </div>;

export default Service;
