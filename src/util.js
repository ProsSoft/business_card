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
  const locationName = window.location.hash.slice(19, window.location.hash.length);
  const patternProduct = 'development';
  const patternMobile = '-development';
  const patternWebsites = 'pplication-development';

  if (locationName === patternProduct || locationName === patternMobile || locationName === patternWebsites) {
    window.location.replace("http://localhost:8080/#/home/contact-us");
  } else {
    $('html, body').animate({
      scrollTop: $('.contact__title').offset().top
    }, 2000);
  }
};
