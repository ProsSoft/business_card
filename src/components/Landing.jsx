import React from 'react';
import LandingHero from './LandingHero'
import LandingServices from './LandingServices'
import LandingSolutions from './LandingSolutions'
import LandingContact from './LandingContact'

const Landing = () => (
  <div className="landing">
    <LandingHero/>
    <LandingServices />
    <LandingSolutions />
    <LandingContact />
  </div>
);

export default Landing;
