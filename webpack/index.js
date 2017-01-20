import $ from 'jquery';
import { isMobileUA, isMobileView } from 'mdetect';
import Swiper from 'swiper';
import '@geekpark/navsync';

const __ISDEV__ = process.env.NODE_ENV === 'development';
const init = () => {
  if (__ISDEV__ && isMobileUA()) require('eruda').init();
};

$(() => {
  init();

  if (!isMobileView()) {
    const articlesSwiper = new Swiper('#articles-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: '.articles-pagination',
      paginationClickable: true,
      prevButton: '.articles-button-prev',
      nextButton: '.articles-button-next'
    });
  }

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
    slidesPerView: isMobileView() ? 1 : 2,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: isMobileView() ? 0 : 60
  });

  // 导航
  const $header = $('#site-header');
  const $nav = $header.find('.nav');
  const $button = $header.find('.button');
  $button.on('click', function () {
    $(this).toggleClass('closed');
    $nav.toggleClass('show');
  });

  $header.find('.nav-item').on('click', function () {
    $button.toggleClass('closed');
    $nav.toggleClass('show');
  });
});

window.onload = () => {
  setTimeout(() => {
    $('#site-header').navSync({
      highlightClass: 'active',
      offset: isMobileView() ? 0 : 20
    });
  }, 250);
};
