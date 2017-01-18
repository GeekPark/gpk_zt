import $ from 'jquery';
import { isMobileUA } from 'mdetect';
import Swiper from 'swiper';
import '@geekpark/navsync';
import 'swiper/dist/css/swiper.min.css';

console.log($);
const __ISDEV__ = process.env.NODE_ENV === 'development';
const init = () => {
  if (__ISDEV__ && isMobileUA()) require('eruda').init();
};

$(() => {
  init();

  const articlesSwiper = new Swiper('#articles-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: '.articles-pagination',
    paginationClickable: true,
    prevButton: '.articles-button-prev',
    nextButton: '.articles-button-next'
  });

  const photoSwiper = new Swiper('#photo-container', {
    pagination: '.photo-pagination',
    paginationClickable: true,
    nextButton: '.photo-button-next',
    prevButton: '.photo-button-prev'
  });

  const videoSwiper = new Swiper('#video-container', {
    loop: true,
    pagination: '.video-pagination',
    // onlyExternal: true,
    slidesPerView: 2,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 60
  });
});

window.onload = () => {
  setTimeout(() => {
    $('#site-header nav').navSync({
      highlightClass: 'active',
      offset: 20
    });
  }, 250);
};
