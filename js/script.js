const menu = document.querySelector('nav>ul');
const headerBg = document.querySelector('.header');

menu.addEventListener('mouseover',function(){
    headerBg.classList.add('open');
});
menu.addEventListener('mouseout',function(){
    headerBg.classList.remove('open');
});

var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});