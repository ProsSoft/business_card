/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
/* import { Carousel } from 'react-responsive-carousel'; */

const LandingHero = (props) => (
  <section className="hero" id="top" ref={props.scrollElem}>

{/*    <Carousel
      showIndicators={false}
      transitionTime={1000}
      showArrows
      showThumbs={false}
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={5000}
    >
      <div>
        <img src="/dist/assets/images/sliderDay.png" alt="background slider" />
      </div>
      <div>
        <img src="/dist/assets/images/sliderDay.png" alt="background slider" />
      </div>
    </Carousel> */}
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
