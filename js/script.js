const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Geolocation

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        console.log(latitude, longitude)

    }, () => {
        console.log("Error getting position")
    }) 
}