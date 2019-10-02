import $ from 'jquery';
import { fixedHeaderHeight } from './constants';

export const scrollTo = (section = 'top', didNotMount) => {
  const animate = () => $('html, body').animate({
    scrollTop: $(`#${section}`).offset().top - fixedHeaderHeight
  }, 1000);
  if (didNotMount) {
    setTimeout(animate, 500);
  } else {
    animate();
  }
};

export const scrollToContactUs = () => {
  $('html, body').animate({
    scrollTop: $('.contact__title').offset().top
  }, 2000);   
};
