// header
const menu = document.querySelector('nav>ul');
let headerBg = document.querySelector('.header');
let headerHeight = headerBg.offsetHeight;

window.onscroll = function(){
    let windowTop = window.scrollY; 
    if(windowTop >= headerHeight){
        headerBg.classList.add('fixed');
    }else{
        headerBg.classList.remove('fixed');
    }
}


menu.addEventListener('mouseover',function(){
    headerBg.classList.add('open');
});
menu.addEventListener('mouseout',function(){
    headerBg.classList.remove('open');
});

// swiper
var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".mdSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// topBtn
const topBtn = document.querySelector('.top-btn');
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: 'smooth'});
});
