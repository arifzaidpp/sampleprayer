// Obtain user's location coordinates
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Display latitude and longitude in the HTML file
  document.getElementById('latitude').textContent = latitude;
  document.getElementById('longitude').textContent = longitude;

  // Send API request to Aladhan API for prayer times
  fetch(`http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=1`)
    .then(response => response.json())
    .then(data => {
      // Display prayer times in the HTML file
      const prayerTimes = data.data.timings;
      document.getElementById('fajr').textContent = prayerTimes.Fajr;
      document.getElementById('dhuhr').textContent = prayerTimes.Dhuhr;
      document.getElementById('asr').textContent = prayerTimes.Asr;
      document.getElementById('maghrib').textContent = prayerTimes.Maghrib;
      document.getElementById('isha').textContent = prayerTimes.Isha;
    })
    .catch(error => console.log(error));
}

function errorCallback(error) {
  console.log(error);
}
