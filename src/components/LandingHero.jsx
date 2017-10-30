import React from 'react';
import { Link } from 'react-router-dom';

const LandingHero = () => (
  <section className="hero">
    <h1 className="hero__title">Developing software for business</h1>
    <Link to="#consult">Get a free consultation</Link>
  </section>
);

export default LandingHero;
