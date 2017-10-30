import React from 'react';
import LandingHero from './LandingHero'
import LandingServices from './LandingServices'
import LandingSolutions from './LandingSolutions'

const Landing = () => (
  <div className="landing">
    <LandingHero/>
    <LandingServices />
    <LandingSolutions />
  </div>
);

export default Landing;
