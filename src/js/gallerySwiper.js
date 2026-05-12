import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const gallerySwiperElement = document.querySelector('.gallery-swiper');

if (gallerySwiperElement) {
  new Swiper(gallerySwiperElement, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      prevEl: '.gallery-button-prev',
      nextEl: '.gallery-button-next',
      disabledClass: 'is-disabled',
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });
}
