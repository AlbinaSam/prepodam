'use strict';

//пользовательское меню
(function () {
  var userNavButton = document.querySelector('.user-nav__button');
  var userNav = document.querySelector('.user-nav');
  
  if(userNavButton) {
    userNavButton.addEventListener('click', function () {
      userNavButton.classList.toggle('user-nav__button--open');
      userNav.classList.toggle('user-nav--open');

    })
  }

})();

//общее меню

(function () {

  var pageHeader = document.querySelector('.page-header__wrapper');
  var navButton = document.querySelector('.page-header__nav-button');
  var nav = document.querySelector('.page-header__nav');

  if (navButton) {
    navButton.addEventListener('click', function () {
      pageHeader.classList.toggle('page-header__wrapper--menu-open');
      navButton.classList.toggle('page-header__nav-button--open');
      nav.classList.toggle('page-header__nav--open');
    })
  }
})();

//слайдер программ

(function () {

  var programsSlider = document.querySelector('.programs__slider-container');

  if (programsSlider) {
    var mySwiper;
    var isActive;

    var initSlider = function () {
      mySwiper = new Swiper (programsSlider, {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: false,
        direction: 'horizontal',
      });
    };

    if (document.body.clientWidth < '768') {
      initSlider();
      isActive = true;
    }

    window.addEventListener('resize', function () {

      if (document.body.clientWidth >= '768') {
        if (isActive) {
          mySwiper.destroy(true, true);
          isActive = false;
        }
      }

      if (document.body.clientWidth < '768' && !isActive) {
        initSlider();
        isActive = true;
      }
    });
  }
})();