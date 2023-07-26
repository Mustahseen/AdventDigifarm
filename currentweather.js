// Current weather

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-data");
// const timezoneEl = document.getElementById("time-zone");
// const countryEl = document.getElementById("country");
const hourlyForecastEl = document.getElementById("hourly-forecast");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

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

const OneCall_API_KEY = "7647b0013bcbde6e4dd409d68ca0f70f";

const lat = 33.844481428571434;
const lon = -81.71086128571427;
const apiKey = "3199961a1db6540d9bb6d68370f2cde6";

const currentWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const oneCallApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${OneCall_API_KEY}&units=imperial`;

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    hoursIn12HrFormat +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + "," + " " + date + " " + months[month];
}, 1000);

// Current Weather //

const weatherIcon = document.querySelector(".current-weather-icon");

async function getCurrentWeatherData() {
  fetch(currentWeather_ApiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".degree").innerHTML = data.main.temp + " °F";
      document.querySelector(".weather-status").innerHTML =
        data.weather[0].main;

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./icons/animated/cloudy.svg";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./icons/animated/day.svg";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./icons/animated/rainy-6.svg";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./icons/animated/rainy-4.svg";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./icons/animated/rainy-7.svg";
      } else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "./icons/animated/thunder.svg";
      }
    });
}

getCurrentWeatherData();

// Current Other Weather Parameter //

async function getCurrentOtherWeatherData() {
  fetch(currentWeather_ApiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".cloud").innerHTML = data.clouds.all + "";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "";
      document.querySelector(".windSpeed").innerHTML = data.wind.speed + " ";

      document.querySelector(".feels-like").innerHTML =
        data.main.feels_like + " ";
      document.querySelector(".temp-max").innerHTML = data.main.temp_max + " ";
      document.querySelector(".temp-min").innerHTML = data.main.temp_min + " ";
    });
}

getCurrentOtherWeatherData();

const sunDataEl = document.getElementById("sun-container-data");
async function getSunData() {
  fetch(oneCallApiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let { sunrise, sunset } = data.current;

      sunDataEl.innerHTML = `
      <div class="sunData">
        <div>
        <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
            <p>Sun Rise</p>
        </div>
        <img src="./icons/sunrise2.png" class="other-icon">
        <div>
        <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
          <p>Sun Set</p>
        </div>
      </div>
      `;

      // document.querySelector(".sun-rise").innerHTML = ${window.moment(sunrise * 1000).format("HH:mm a")};
      // document.querySelector(".sun-set").innerHTML = ${window.moment(sunrise * 1000).format("HH:mm a")};
    });
}

getSunData();

// Hourly Forecast //

function fetchWeatherForecast() {
  fetch(forecastWeather_ApiUrl)
    .then((response) => response.json())
    .then((data2) => {
      // console.log(data2);
      showHourlyData(data2);
    });
}
fetchWeatherForecast();

function showHourlyData(data2) {
  let { clouds, temp, feels_like, humidity } = data2.current;
  let hourlyForecast = "";

  data2[0].forEach((hour, idx) => {
    if (idx == 0) {
      hourlyForecastEl.innerHTML = `
      <img
        src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"
        alt="weather icon"
        class="w-icon"
      />
      <div class="others">
        <div class="hour">${window.moment(hour.dt * 1000).format("ddd")}</div>
        <div class="temp">${hour.main.temp}&#176; F</div>
        <div class="temp">Feels like - ${hour.main.feels_like}&#176; F</div>
        <div class="temp">Clouds - ${hour.clouds.all}%</div>
        <div class="temp">Humidity - ${hour.main.humidity}%</div>
       </div>
      `;
    } else {
      otherDayForecast += `
      <div class="weather-forecast-item">
        <div class="hour">${window.moment(hour.dt * 1000).format("ddd")}</div>
          <img
            src="https://openweathermap.org/img/wn/${
              hour.weather[0].icon
            }@2x.png"
            alt="weather icon"
            class="w-icon"
          />
        <div class="hour">${window.moment(hour.dt * 1000).format("ddd")}</div>
        <div class="temp">${hour.main.temp}&#176; F</div>
        <div class="temp">Feels like - ${hour.main.feels_like}&#176; F</div>
        <div class="temp">Clouds - ${hour.clouds.all}%</div>
        <div class="temp">Humidity - ${hour.main.humidity}%</div>
      </div>
      `;
    }
  });
  hourlyForecastEl.innerHTML = hourlyForecast;
}

showHourlyData();
