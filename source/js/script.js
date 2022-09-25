// menu
let navMains = document.querySelectorAll('.main-nav');
let navToggle = document.querySelector('.navigation__button-toggle');

for (let navMain of navMains) {
  navMain.classList.add('navigation--closed');
}

// const mainnav = document.querySelectorAll('.mainnav');
// for (let i = 0; i < mainnav.length; i++) {
//   mainnav[i].classList.remove('navigation--opened');
// }

navToggle.addEventListener('click', function () {
  for (let navMain of navMains) {
    if (navMain.classList.contains('navigation--nojs')) {
      navMain.classList.add('navigation--opened');
      navMain.classList.remove('navigation--nojs');
    }
    else {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--nojs');
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


// map
function funonload() {
  let mapyandex = document.querySelector('.mapyandex');
  mapyandex.classList.remove('mapnojs');
  mapyandex.style.display='block';

  // let mapyandexs = document.querySelectorAll('.mapyandex');
  // for (let mapBody of mapyandexs) {
  //   mapBody.classList.remove('mapnojs');
  //   mapBody.style.display='block';
  // }

  // var mapBodys1 = document.querySelectorAll('.mapnojs');
// for (var i = 0; i < mapBodys1.length; i++) {
//   mapBodys1[i].classList.remove('mapnojs');
//   mapBodys1[i].style.display='block';
// }
}
