var mainNav = document.querySelector(".main-nav");
var menuButton = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

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
    icon: 'img/icon-map-pin.svg'
  });
}
