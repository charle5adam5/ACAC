const nav = document.querySelector('.nav-list');
const menuBar = document.querySelectorAll('.menu-bar');
const menu = document.querySelector('.menu');


nav.addEventListener('click', () => {
 nav.classList.toggle('slide');
 menuBar.forEach(item => {
  item.classList.toggle('close');
 });
 menu.classList.toggle('menu');
 menu.classList.toggle('open');
});