/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from 'react-router-dom';
import { scrollTo ,scrollToContactUs } from "../../../util";

const Hero = ({
                scrollElem,
                slides,
                title1,
                title2 = '',
                quoteAuthor = '',
                buttonText = 'Get a free consultation',
                noBack,
                didNotMount,
                scrollToElemId,
              }) =>
  <section className="hero" id="top" ref={scrollElem}>
    {/*todo: why is scrollElem needed as it's empty*/}
    {slides.map(({ src, className = '' }, key) =>
      <img
        {...{ src, key }}
        className={`${className} hero__background`}
        alt={`${title1} ${title2}`}
      />)
    }
    <div className={`hero__wrapper ${noBack ? 'no-back' : ''}`}>
      <h1 className="hero__title">
        {title1}<br/>{title2}
      </h1>
      <h2 className="hero__quote_author">{quoteAuthor}</h2>
      <button
        className="landing-green-btn"
       // onClick={() => scrollTo(scrollToElemId, didNotMount)}
       onClick={() => scrollToContactUs()}
      >
        {buttonText}
      </button>
    </div>
  </section>;

export default Hero;
