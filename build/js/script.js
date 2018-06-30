var menu = document.querySelector('.header__nav');
var menuToggle = document.querySelector('.header__menu-toggle');

menu.classList.remove('nav-menu--nojs');

menuToggle.addEventListener('click', function() {

  if ( menu.classList.contains('header__nav--slide-down') ) {
    menu.classList.remove('header__nav--slide-down');
    menuToggle.classList.remove('header__menu-toggle--closed');
  }
  else {
    menu.classList.add('header__nav--slide-down');
    menuToggle.classList.add('header__menu-toggle--closed');
  }

});
