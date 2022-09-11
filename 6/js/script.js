let navMains = document.querySelectorAll('.main-nav');
let navToggle = document.querySelector('.navigation__button-toggle');

navToggle.addEventListener('click', function () {

  for (let navMain of navMains) {

    navMain.classList.remove('navigation--nojs');

    if (navMain.classList.contains('navigation--closed')) {
      navMain.classList.remove('navigation--closed');
      navMain.classList.add('navigation--opened');
    } else {
      navMain.classList.add('navigation--closed');
      navMain.classList.remove('navigation--opened');
    }
  }
});

