/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ scrollElem, slides, title1, title2 = ''}) =>
  <section className="hero" id="top" ref={scrollElem}>
    {/*todo: why is scrollElem needed as it's empty*/}
    {/*<img className="hero__background1" src="/dist/assets/images/sliderDay.png" alt="background slider" />
    <img className="hero__background2" src="/dist/assets/images/sliderNight.jpg" alt="background slider" />*/}
    {slides.map(({ src, className }) =>
      <img {...{ src }} key={src} className={`${className} hero__background`}/>)}
    <div className="hero__wrapper" >
      <h1 className="hero__title">
        {/*Developing software<br />for business*/}
        {title1}<br/>{title2}
      </h1>
      <Link to="#consult" className="landing-green-btn">
        Get a free consultation
      </Link>
    </div>
  </section>;

export default Hero;
