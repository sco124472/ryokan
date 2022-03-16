'use strict';
//全部のページ共通のjavascript,jqueryを記述

//テキストのfadeIn fadeOutに関する
AOS.init();
//終了

//headerのheader__menuとハンバーガーメニュを768pxで切替する
//globalMenuSpの表示の有無
const hamburger = document.querySelectorAll('.hamburger');
const headerMenu = document.querySelectorAll('.horizontal-nav__item');
const globalMenuSp = document.querySelectorAll('.globalMenuSp');
window.addEventListener('DOMContentLoaded', onMediaQueryList)
window.addEventListener('resize', onMediaQueryList);

function onMediaQueryList() {
  if (window.innerWidth <= 766) {
    hamburger.forEach(function (item, index) {
      item.classList.remove('hide');
    })
    globalMenuSp.forEach(function (item, index) {
      item.classList.remove('hide');
    })
    headerMenu.forEach(function (item, index) {
      item.classList.add('hide');
    });
  } else {
    headerMenu.forEach(function (item, index) {
      item.classList.remove('hide');
    })
    hamburger.forEach(function (item, index) {
      item.classList.add('hide');
    })
    globalMenuSp.forEach(function (item, index) {
      item.classList.add('hide');
    })
  }
}

const modal = document.querySelectorAll('.modal');
window.addEventListener('DOMContentLoaded', modalHeight)
window.addEventListener('resize', modalHeight);

function modalHeight() {
  if (window.innerHeight <= 640) {
    modal.forEach(function (item, index) {
      item.classList.add('modal--scroll-on');
    })
  } else {
    modal.forEach(function (item, index) {
      item.classList.remove('modal--scroll-on');
    })
  }
}


$(function () {

  //768px以下でハンバーガーメニュを押すことでメニューの開閉を行う。
  let dis = 100;
  $('.hamburger').click(function () {
    $(".globalMenuSp").animate({ "right": "+=" + dis + "%" }, 200);
    $('body').toggleClass('body-fixed');
    dis *= -1;
    $(this).toggleClass('hamburger--open');
  });


  //宿泊予約のぺージの開閉
  $('.before-icon-btn').click(function () {
    $('.modal').removeClass('hide');
    $('body').addClass('body-fixed');
    $('.header').addClass('hide');
  })
  $('.modal__close-btn').click(function () {
    $('.modal').addClass('hide');
    $('body').removeClass('body-fixed');
    $('header').removeClass('hide');
  })
})

//flatpickr
flatpickr("#myInput", {
  locale: "ja", // 日本語を適応
  minDate: "today",
  mode: "range",
  dateFormat: "Y-m-d"
});
