const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Leaflet
      const coords = [latitude, longitude]

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);


    // Put a marker on a location we click
    map.on('click', (mapEvent) => {
        const { lat, lng } = mapEvent.latlng

        L.marker([lat, lng])
        .addTo(map)
        .bindPopup(L.popup({
            maxWidth: 150,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: "running-popup"
        }))
        .setPopupContent('Workout')
        .openPopup();
    })
    

    },
    () => {
      alert("Error getting position! Please try again.")
    }
  );
}
