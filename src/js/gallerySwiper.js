import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const gallerySwiperElement = document.getElementById('gallery-swiper');

if (gallerySwiperElement) {
  new Swiper(gallerySwiperElement, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      prevEl: '[data-gallery-button-prev]',
      nextEl: '[data-gallery-button-next]',
      disabledClass: 'is-swiper-navigation-disabled',
    },
    breakpoints: {
      1200: {
        spaceBetween: 24,
      },
    },
  });
}
