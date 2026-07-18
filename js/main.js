// const mainSwiper = new Swiper(".mainSwiper", {
//   loop: true,

//   slidesPerView: 1,

// //   autoplay: {
// //     delay: 3000,
// //     disableOnInteraction: false,
//   },

//   speed: 1000,
// });

const swiper = new Swiper(".bestSwiper", {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const newSwiper = new Swiper(".newSwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".new-pagination",
    clickable: true,
  },
});
