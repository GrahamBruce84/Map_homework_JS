var initialise = function(){
  var center = {lat:55.857103,lng: -4.243951};
  var zoom = 15;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);

  mainMap.addClickEvent();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var cockBurnButton = document.querySelector("#cockBurn-button");
  cockBurnButton.addEventListener("click", mainMap.goToCockburn.bind(mainMap));

  var myLocButton = document.querySelector("#myLoc-button");
  myLocButton.addEventListener("click", mainMap.findMyLocation.bind(mainMap));
};

window.addEventListener("load", initialise);