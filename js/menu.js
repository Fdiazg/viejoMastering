const clickx = document.querySelector('.drop-menu');
const nav = document.querySelector('#main-nav');


clickx.addEventListener('click', function(){
  clickx.classList.toggle('open-menu');

  nav.classList.toggle('menu-toggle')
  nav.classList.toggle('main-nav__open')
});
