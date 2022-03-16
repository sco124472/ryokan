'use strict';
//フロントページだけのjavascript,jqueryを記述
$(function () {
  //お知らせの表示切替
  $('.tab__item--shop').click(function () {
    if (!($('.vertical-posts--another-information').hasClass('close'))) {
      $('.vertical-posts--another-information').addClass('close');
      $('.vertical-posts--shop-information').removeClass('close');
      $('.tab__item--shop').css('border-bottom-width', '1px');
      $('.tab__item--another').css('border-bottom-width', '0');
    }
  })
  $('.tab__item--another').click(function () {
    if (!($('.vertical-posts--shop-information').hasClass('close'))) {
      $('.vertical-posts--shop-information').addClass('close');
      $('.vertical-posts--another-information').removeClass('close');
      $('.tab__item--another').css('border-bottom-width', '1px');
      $('.tab__item--shop').css('border-bottom-width', '0');
    }
  })
  //front-pageのheader部分の切り替え

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > $('.about').offset().top) {
      $('.header').addClass('header--lighter');
      $('.site-title__logo-mark').attr('src', 'img/sakura-icon-black.png');
    } else {
      $('.header').removeClass('header--lighter');
      $('.site-title__logo-mark').attr('src', 'img/sakura-icon.svg');
    }
  })
})
