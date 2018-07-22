import $ from 'jquery';
import { fixedHeaderHeight } from '../../constants';

export const scrollTo = (section = 'top', didMount) => {
  const animate = () => $('html, body').animate({
    scrollTop: $(`#${section}`).offset().top - fixedHeaderHeight
  }, 1000);
  if (didMount) {
    window.setTimeout(animate, 500);
  } else {
    animate();
  }
};

