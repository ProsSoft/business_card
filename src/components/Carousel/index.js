/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../scss/pages/carousel.scss';
import {imagesUrl} from '../../constants';


const galleryItems = (() => Array(20).fill(null).map((img, index) => {
  const src = `${imagesUrl}carousel/${index}.png`;

  return (
    <img
      {...{ src }}
      key={src}
      alt={`partner ${index}`}
    />
  );
}))();

const responsive = {
  0: { items: 2 },
  320: { items: 2},
  375: { items: 2 },
  425: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
  1290: { items: 5 },
};

const autoPlayInterval = 4000;

const Carousel = () => (
  <div className='carousel-container'>
    <h3 className="section__title">Our clients</h3>
    <AliceCarousel
      {...{
        responsive,
        autoPlayInterval,
      }}
      duration={4000}
      items={galleryItems}
      autoPlayDirection="ltl"
      playButtonEnabled={false}
      buttonsDisabled
      dotsDisabled
      autoPlay
      fadeOutAnimation
      mouseDragEnabled
    />
  </div>
);

export default Carousel;
