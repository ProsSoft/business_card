import React from 'react';
import { Link } from 'react-router-dom';

const LandingHero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__wrapper">
        <h1 className="hero__title">Developing software for business</h1>
        <Link to="#consult" className="landing-green-btn">
          Get a free consultation
        </Link>
      </div>
    </div>
  </section>
);

export default LandingHero;
