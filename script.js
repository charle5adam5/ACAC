// const nav = document.querySelector('.nav');
// const menu = document.querySelector('.menu');
// const menuBar = document.querySelectorAll('.menu-bar');
// // slide nav and rotate bars
// nav.addEventListener('click', function() {
//  nav.classList.toggle('slide');
//  menuBar.forEach(item => {
//   item.classList.toggle('rotate');
//  });
// //  slide down actual menu
//  menu.classList.toggle('open');
// //  make menu visible 
//  menu.classList.toggle('menu');
// })

const nav = document.querySelector('.nav-list');
const menuBar = document.querySelectorAll('.menu-bar');
const menu = document.querySelector('.menu');


nav.addEventListener('click', () => {
 nav.classList.toggle('slide');
 menuBar[0].classList.toggle('topBar');
menuBar[1].classList.toggle('middleBar');
menuBar[2].classList.toggle('lastBar');

 menu.classList.toggle('menu');
 menu.classList.toggle('open');
});
