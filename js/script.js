const menu = document.querySelector('nav>ul');
const headerBg = document.querySelector('.header');

menu.addEventListener('mouseover',function(){
    headerBg.classList.add('open');
});
menu.addEventListener('mouseout',function(){
    headerBg.classList.remove('open');
});