import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

const reviewsSwiperElement = document.querySelector('.reviews-swiper');

if (reviewsSwiperElement) {
  const desktopMediaQuery = window.matchMedia('(min-width: 1200px)');

  const reviewsSwiper = new Swiper(reviewsSwiperElement, {
    modules: [Mousewheel],
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    mousewheel: {
      enabled: desktopMediaQuery.matches,
      releaseOnEdges: true,
    },
  });

  const toggleDesktopMousewheel = event => {
    if (event.matches) {
      reviewsSwiper.mousewheel.enable();
      return;
    }

    reviewsSwiper.mousewheel.disable();
  };

  desktopMediaQuery.addEventListener('change', toggleDesktopMousewheel);
}
