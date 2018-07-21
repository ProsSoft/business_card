import $ from 'jquery';
import { fixedHeaderHeight } from '../../constants';

export const scrollTo = (section) => console.log(section) || section && $('html, body').animate({
    scrollTop: $(`#${section}`).offset().top - fixedHeaderHeight
  }, 1000);

