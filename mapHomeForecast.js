const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const dailyForecastEl = document.getElementById("weather-forecast");
const hourlyForecastEl = document.getElementById("hourly-forecast");
const currentTempEl = document.getElementById("current-temp");

const latt = 33.844481428571434;
const lonn = -81.71086128571427;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
  "Novermber",
  "December",
];

const API_KEY = "7647b0013bcbde6e4dd409d68ca0f70f";

const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latt}&lon=${lonn}&appid=${API_KEY}&units=imperial`;
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
}, 1000);

function getWeatherData() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showDailyWeatherData(data);
    });
}

getWeatherData();

function showDailyWeatherData(data) {
  let { icon, humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  let otherDayForecast = "";
  data.daily.forEach((day, idx) => {
    if (idx == 0) {
      currentTempEl.innerHTML = `
      <h2>Daily</h2>
      <img
        src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
        alt="weather icon"
        class="w-icon"
      />
      <div class="others">
        <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
        <div class="temp">Max Temp - ${day.temp.max}&#176; F</div>
        <div class="temp">Min Temp - ${day.temp.min}&#176; F</div>
      </div>
      `;
    } else {
      otherDayForecast += `
      <div class="weather-forecast-item">
        <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
          <img
            src="https://openweathermap.org/img/wn/${
              day.weather[0].icon
            }@2x.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="day-description"> ${day.weather[0].description}</div>
          <div class="tempp">Night - ${day.temp.night}&#176; F</div>
          <div class="tempp">Day - ${day.temp.day}&#176; F</div>
          <div class="tempp">Clouds - ${day.clouds}%</div>
      </div>
      `;
    }
  });

  dailyForecastEl.innerHTML = otherDayForecast;
}

// Hourly Forecast

function getHourlyWeatherData() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      showHourlyWeatherData(data);
    });
}

getHourlyWeatherData();

function showHourlyWeatherData(data) {
  let { icon, humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  let otherHourForecast = "";
  data.hourly.forEach((hour, idx) => {
    otherHourForecast += ` 
    <div class="weather-forecast-item">
        <div class="day">${window.moment(hour.dt * 1000).format("h A")}</div>
          <img
            src="https://openweathermap.org/img/wn/${hour.weather[0].icon}.png"
            alt="weather icon"
            class="w-icon"
          />
          <div class="tempp">T: ${hour.temp}&#176; F</div>
          <div class="tempp">Dew point: ${hour.dew_point}%</div>
          <div class="tempp">Cloud: ${hour.clouds}%</div>
      </div>
      `;
  });

  hourlyForecastEl.innerHTML = otherHourForecast;
}
