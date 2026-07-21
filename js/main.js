const mainSwiper = new Swiper(".mainSwiper", {
  loop: true,

  slidesPerView: 1,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1000,
});

const swiper = new Swiper(".bestSwiper", {
  spaceBetween: 20,
  loop: true,

  speed: 1000,

  autoplay: {
    delay: 3000, //
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const newSwiper = new Swiper(".newSwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const mobileSwiper = new Swiper(".mobileSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,

  loop: true,

  speed: 3000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  allowTouchMove: false,
});

const collaboRight = new Swiper(".collaboRight", {
  slidesPerView: "1.5",
  spaceBetween: 5,

  loop: true,

  speed: 4000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const collaboLeft = new Swiper(".collaboLeft", {
  slidesPerView: "auto",
  spaceBetween: 5,

  loop: true,

  speed: 3000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
});
