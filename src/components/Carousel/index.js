import React from 'react';
import '../../scss/pages/carousel.scss';
import {imagesUrl} from '../../constants';
import AliceCarousel from 'react-alice-carousel';

const galleryItems = (() => Array(20).fill(null).map((img, index) => {
  const src = `${imagesUrl}imcar/${index}.png`;

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
  1024: { items: 5 },
};

const autoPlayInterval = 4000;

const Carousel = () => (
  <div className='carousel-container'>
    <AliceCarousel
      {...{
        responsive,
        autoPlayInterval,
      }}
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
