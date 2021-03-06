const swiper = new Swiper('#plan .swiper-container', {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    prevEl: '#plan .swiper-navigation-prev',
    nextEl: '#plan .swiper-navigation-next',
  },
});
