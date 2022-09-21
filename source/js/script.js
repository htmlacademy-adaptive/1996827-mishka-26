// menu
let navMains = document.querySelectorAll('.main-nav');
let navToggle = document.querySelector('.navigation__button-toggle');

for (let navMain of navMains) {
  navMain.classList.remove('navigation--opened');
}

// const mainnav = document.querySelectorAll('.mainnav');
// for (let i = 0; i < mainnav.length; i++) {
//   mainnav[i].classList.remove('navigation--opened');
// }

navToggle.addEventListener('click', function () {

  for (let navMain of navMains) {
    if (navMain.classList.contains('navigation--closed')) {
      navMain.classList.add('navigation--opened');
      navMain.classList.remove('navigation--nojs');
      navMain.classList.remove('navigation--closed');
    }
    else {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
    }
  }
});

// order
let OrderModal = document.querySelector('.modal');
let productButton = document.querySelector('.product__button');
let closeButton = document.querySelector('.close-button');

productButton.onclick = function () {
  // console.log("click");
  OrderModal.classList.remove('modal--close');
};

closeButton.onclick = function () {
  // console.log("click");
  OrderModal.classList.add('modal--close');
};
