import Swiper from 'swiper';
import 'swiper/css';

const reviewsSwiperElement = document.querySelector('.reviews-swiper');

if (reviewsSwiperElement) {
  new Swiper(reviewsSwiperElement, {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
  });
}
