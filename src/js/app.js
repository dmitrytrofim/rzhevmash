//@mark imports
import Swiper from 'swiper';
import { Mousewheel, EffectFade } from 'swiper/modules';
// import { Splide } from '@splidejs/splide';
// import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js';
// import LocomotiveScroll from 'locomotive-scroll';

//@mark app
class App {
 constructor() {
  this.page = document.querySelector('.page');
  this.mainSlider = {
   main: document.querySelector('.main__slider'),
   nav: document.querySelector('.main-navigation'),
   btns: document.querySelectorAll('.main-navigation__btn'),
  };
  this.greetSlider = {
   main: document.querySelector('.greet__slider'),
   btnsNav: document.querySelectorAll('.greet__slider-nav-btn'),
  };
  this.header = {
   wrap: document.querySelector('.page__header'),
   main: document.querySelector('.header__main'),
  };
  this.burger = {
   btn: document.querySelector('.header__main-burger'),
   menu: document.querySelector('.header__menu'),
  };
  this.mouse = document.querySelector('.mouse-wheel');
 }
 //@mark mainSlider
 initMainSlider() {
  const mainSlider = new Swiper(this.mainSlider.main, {
   modules: [Mousewheel],
   direction: 'vertical',
   mousewheel: true,
   on: {
    slideChange: (e) => {
     if (e.activeIndex !== 0) {
      this.header.wrap.classList.add('j-hide');
      this.mainSlider.nav.classList.add('j-black');
      this.mouse.classList.add('j-black');
     } else {
      this.header.wrap.classList.remove('j-hide');
      this.mainSlider.nav.classList.remove('j-black');
      this.mouse.classList.remove('j-black');
     }
     this.mainSlider.btns.forEach((btn) => {
      btn.classList.remove('j-active');
      if (btn.dataset.main - 1 === e.activeIndex) btn.classList.add('j-active');
     });
    },
   },
  });

  this.mainSlider.btns.forEach((btn) => {
   btn.addEventListener('click', () => {
    mainSlider.slideTo(btn.dataset.main - 1);
   });
  });
 }
 //@mark greetSlider
 initGreetSlider() {
  const greetSlider = new Swiper(this.greetSlider.main, {
   modules: [EffectFade],
   effect: 'fade',
   allowTouchMove: false,
  });

  this.greetSlider.btnsNav.forEach((btn) => {
   btn.addEventListener('click', () => {
    this.greetSlider.btnsNav.forEach((el) => {
     if (el.dataset.greet === btn.dataset.greet) {
      el.classList.add('j-active');
     } else {
      el.classList.remove('j-active');
     }
    });
    greetSlider.slideTo(btn.dataset.greet - 1);
   });
  });
 }
 //@mark burger
 initBurger() {
  this.burger.btn.addEventListener('click', () => {
   this.burger.btn.classList.toggle('j-active');
   this.burger.menu.classList.toggle('j-show');
   this.header.main.classList.toggle('j-menu');
  });
 }
 //@mark start
 start() {
  if (this.mainSlider.main) this.initMainSlider();
  if (this.greetSlider.main) this.initGreetSlider();
  if (this.burger.btn) this.initBurger();
 }
}
const app = new App().start();
