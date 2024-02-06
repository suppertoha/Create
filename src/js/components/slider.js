import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
//const swiper = new Swiper(el, {
//  slidesPerView: "auto",
//});

function initSwipers() {
  var allSwipers = document.querySelectorAll('.swiper');

  allSwipers.forEach(function(swiperContainer) {
    var swiper = new Swiper(swiperContainer, {
      // Здесь вы можете настроить параметры вашего слайдера
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
}

// Вызов функции для инициализации всех слайдеров
initSwipers();

