if ("geolocation" in navigator) {
  addEventListeners();

  //var locations = window.localStorage.getItem("locations") || {}; 
  //window.localStorage.setItem("locations", JSON.stringify(locations));
  //window.localStorage.removeItem("locations");
} else {
  alert("Geolocation is not available")
}

function addEventListeners() {
  var saveButton = document.getElementById('save-location');
  saveButton.addEventListener('click', getLocation);
  var showButton = document.getElementById('show-locations');
  showButton.addEventListener('click', showLocations);
  var clearButton = document.getElementById('clear-locations');
  clearButton.addEventListener('click', clearLocations);
}

function onLocation(position){
  var date = Date.now().toString();
  var positionObject = position.coords.latitude + "," + position.coords.longitude;
  var locations = JSON.parse(window.localStorage.getItem("locations")) || {};
  
  console.log(locations);
  
  locations[date] = positionObject;
  console.log(locations);

  window.localStorage.setItem("locations", JSON.stringify(locations));
}

function onError(error){
  console.error(error);
}

function getLocation() {
  console.log("getting your location");
  var options = {enableHighAccuracy: true};
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
    // you know how to do geoloation already, right??
    // in the success handler, save the location in local storage

  }

  function showLocations() {
    console.log("showing locations")
    // retrieve the locations from local storage and add them to the DOM
    var locations = JSON.parse(window.localStorage.getItem("locations"));
    while(document.getElementById("location-list").firstChild){
      document.getElementById("location-list").removeChild(document.getElementById("location-list").firstChild);
    }
    for(item in locations){
      
      var element = document.createElement("li");
      var node = document.createTextNode(locations[item]);
      element.appendChild(node);
      document.getElementById("location-list").appendChild(element);
    }

    //document.getElementById("location-list").innerHTML = window.localStorage.getItem("position");
  }

  function clearLocations() {
    console.log('All cleared!');
    while(document.getElementById("location-list").firstChild){
      document.getElementById("location-list").removeChild(document.getElementById("location-list").firstChild);
    }
    // remove the locations from local storage

    window.localStorage.removeItem("locations");
  }