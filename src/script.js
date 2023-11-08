//current date and time
let currentTime = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = currentTime.getDay();
day = weekdays[currentTime.getDay()];
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();

let current = document.querySelector("#date-time");
current.innerHTML = `${day}  ${hour}:${minutes}`;

//search engine displays the city name on the page after the user submits the form.
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

function changeCity(event) {
  event.preventDefault();

  let inputForm = document.querySelector("#input-form");
  let cityName = inputForm.value;

  let city = document.querySelector("#city");
  city.innerHTML = `${cityName}`;
}

//display city and the temp
function showCity(event) {
  event.preventDefault();

  let city = document.querySelector("#input-form").value;
  let apiKey = "b58a2f047af526to478d86be21c3e75d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showResult);
}

function showResult(response) {
  document.querySelector("#city").innerHTML = response.data.city;

  document.querySelector("#temp-result").innerHTML = `${Math.round(
    response.data.temperature.current
  )}°C`;
  document.querySelector("#condition").innerHTML =
    response.data.condition.description;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.temperature.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} m/s`;
  document.querySelector("#icon").src = response.data.condition.icon_url;
}
let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", showCity);
//forecast
