import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);


function initSwipers() {
  var allSwipers = document.querySelectorAll('.swiper');

  allSwipers.forEach(function (swiperContainer) {
    const portSlider = document.querySelector('.slider-cards');
    var swiper = new Swiper(swiperContainer, {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
      navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
      },
      on: {
        init: function () {
          const activeSlide = portSlider.querySelector('.swiper-slide-active');
          const nextActiveSlide = activeSlide.nextElementSibling;
          const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
          activeSlide.classList.add('slider-visible');
          nextActiveSlide.classList.add('slider-visible');
          nextNextActiveSlide.classList.add('slider-visible');
        },
      },

    });

    document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
      const activeSlide = portSlider.querySelector('.swiper-slide-next');

      document.querySelectorAll('.swiper-slide').forEach(el => {
        el.classList.remove('slider-visible');
      });

      if (activeSlide.previousElementSibling) {
        const nextActiveSlide = activeSlide.previousElementSibling;
        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        activeSlide.nextElementSibling.classList.add('slider-visible');
      }
    });

    document.querySelector('.portfolio-section__next').addEventListener('click', () => {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;
      document.querySelectorAll('.swiper-slide').forEach(el => {
        el.classList.remove('slider-visible');
      });

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    });
  });
}

initSwipers();

const portSlider = document.querySelector('.slider-reviews');

const swiperReviews = new Swiper(portSlider, {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-reviews__next',
    prevEl: '.slider-reviews__prev',
  },
});


