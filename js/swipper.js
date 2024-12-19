const swiper = new Swiper('.swiper1', {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: !0,
  scrollbar: {
      el: ".swiper-scrollbar",
      draggable: !0
  },
  slidesOffsetBefore: 30,
  slidesOffsetAfter: 20,
  breakpoints: {
      960: {
          slidesOffsetBefore: 50
      },
      1300: {
          slidesOffsetBefore: 200,
          slidesOffsetAfter: 50
      }
  }
});


const swiperReviews = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: true,
});
