/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const LandingHero = (props) => (
  <section className="hero" id="top" ref={props.scrollElem}>
    <img className="hero__background1" src="/dist/assets/images/sliderDay.png" alt="background slider" />
    <img className="hero__background2" src="/dist/assets/images/sliderNight.png" alt="background slider" />
    <div className="hero__wrapper" >
      <h1 className="hero__title">
        Developing software<br />for business
      </h1>
      <Link to="#consult" className="landing-green-btn">
        Get a free consultation
      </Link>
    </div>
  </section>
);

export default LandingHero;
