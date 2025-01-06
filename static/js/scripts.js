const burger = document.getElementById('burger');
const logo = document.querySelector('.logo');
const bHeader = document.querySelector('.header-burger');
const menu1 = document.getElementById('menu-1');
const menu2 = document.getElementById('menu-2');
const language = document.getElementById('language');

const body = document.body



burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        logo.style.color = 'black';
        body.style.overflow = 'hidden';
    } else {
        logo.style.color = 'white';
        body.style.overflow = 'auto';
    }
    menu1.classList.toggle('open');
    menu2.classList.toggle('open');
    language.classList.toggle('open'),
    bHeader.classList.toggle('bh-active');

});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2  ,
      centeredSlides: true,
      grid: {
        rows: 1,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      loop: true,
      spaceBetween: 30,
       breakpoints: {
        1024: {
            slidesPerView: 3, 
            grid: {
                rows: 3,
            },
        },
    },
    });