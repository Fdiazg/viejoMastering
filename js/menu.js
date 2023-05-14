// const clickx = document.querySelector('.drop-menu');
// const nav = document.querySelector('#main-nav');


// clickx.addEventListener('click', function(){
//   clickx.classList.toggle('open-menu');

//   nav.classList.toggle('menu-toggle')
//   nav.classList.toggle('main-nav__open')
// });

// const clickx = document.querySelector('.drop-menu');
// const nav = document.querySelector('#main-nav');

// clickx.addEventListener('click', function(e) {
//   e.stopPropagation();
//   clickx.classList.toggle('open-menu');
//   nav.classList.toggle('menu-toggle');
//   nav.classList.toggle('main-nav__open');
// });

// document.addEventListener('click', function(event) {
//   // Verificar si el elemento clicado no es parte del menú
//   if (!nav.contains(event.target) && !clickx.contains(event.target)) {
//     clickx.classList.toggle('open-menu');
//     nav.classList.toggle('menu-toggle');
//     nav.classList.toggle('main-nav__open');
//   }
// });


const clickx = document.querySelector('.drop-menu');
const nav = document.querySelector('#main-nav');

clickx.addEventListener('click', function(event) {
  event.stopPropagation();
  clickx.classList.toggle('open-menu');
  nav.classList.toggle('menu-toggle');
  nav.classList.toggle('main-nav__open');
});

//Cerrar el menú cerrando fuera del menú

document.addEventListener('click', () => {

  if (clickx.classList.contains('open-menu')) {
    clickx.classList.toggle('open-menu');
    nav.classList.toggle('menu-toggle');
    nav.classList.toggle('main-nav__open');
  }
});
