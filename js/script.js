var mainNav = document.querySelector(".main-nav");
var menuButton = document.querySelector(".main-nav__toggle");
var body = document.querySelector(".page-body");

mainNav.classList.remove("main-nav--nojs");
body.classList.remove("page-body--nojs");

menuButton.addEventListener('click', function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

function initMap() {
  // Create a map object and specify the DOM element for display.
  var mishka = {lat: 59.938763, lng: 30.323053};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mishka,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: mishka,
    map: map,
    icon: 'img/ic-map-pin.svg'
  });
}

var openButton = document.querySelector(".top-product__order");
var popup = document.querySelector(".add-to-cart");
var background = document.querySelector(".add-to-cart__mute-background");
var orderButton = document.querySelector(".add-to-cart__button");

openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("add-to-cart--show");
});

background.addEventListener("click", function (evt) {
  popup.classList.remove("add-to-cart--show");
});

orderButton.addEventListener("click", function () {
  popup.classList.remove("add-to-cart--show");
});

window.addEventListener("keydown", function (ev) {
  if (ev.keyCode === 27) {
    if(popup.classList.contains("add-to-cart--show")){
      popup.classList.remove("add-to-cart--show");
    }
  }
});
