// Initialize the map
let map;

function initMap() {
  // Use the Geolocation API to get the user's current position
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Create a map centered at the user's current position
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    });

    // Create a marker at the user's current position and add it to the map
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });
  });
}

function getUserPosition() {
  // Call the initMap function to initialize the map
  initMap();
}
