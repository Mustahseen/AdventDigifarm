// Replace YOUR_API_KEY with your actual API key
const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
const polyId = "64302d80176fe647b64424ce";

const lat = 33.844481428571434;
const lon = -81.71086128571427;
const startDate = "1500336000";
const endDate = "1508976000";
const START_DATE = "2021-01-01";
const END_DATE = "2021-12-31";

// Titan Farm Polygon Data
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;
// Construct the URL for the AgroMonitoring API endpoint you want to access
const currentWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const forecastWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// Onecall api
const oneCallApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`;
// Accumulated data by geo coordinates
const accuTemp_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_temperature?lat=${lat}&lon=${lon}&threshold=284&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;
const accuPrecp_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_precipitation?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;

// Sat Image Data
const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=0&end=1&&polyid=${polyId}&coords=${lon},${lat}&appid=${apiKey}`;

// Soil Data
const soil_ApiUrl = `https://api.agromonitoring.com/agro/1.0/soil?polyid=${polyId}&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;
const soilHist_ApiUrl = `http://api.agromonitoring.com/agro/1.0/soil/history?polyid=${polyId}&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;

// NDVI Data
const ndvi_API = `https://api.agromonitoring.com/agro/1.0/ndvi/history?polyid=${polyId}&start=1515626647&end=1661293447&appid=${apiKey}&units=imperial`;

// UV Index
const uvIndex_ApiUrl = `http://api.agromonitoring.com/agro/1.0/uvi?polyid=${polyId}&appid=${apiKey}&units=imperial`;

/////////////////////////////////////////////////////////////
// Weather Fetching Data
function fetchWeatherData() {
  // Fetch the data from the API using the URL and API key
  fetch(currentWeather_ApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // Process the data and display it on your website
      const weatherSection = document.querySelector("#weather");

      // Temp, Humidity and Pressure
      const temperature = data.main.temp;
      const tempHtml = document.getElementById("weathercurrent");
      tempHtml.textContent = temperature;

      const temperatureFeelsLike = data.main.feels_like;
      const tempFeelsLikeHtml = document.getElementById("feelslikecurrent");
      tempFeelsLikeHtml.textContent = temperatureFeelsLike;

      const icon = data.weather[0].icon;
      const iconHTML = document.getElementById("icon");
      iconHTML.textContent = icon;

      const descriptionMain = data.weather[0].main;
      const descMainHTML = document.getElementById("weatherdescrmain");
      descMainHTML.textContent = descriptionMain;

      const temperatureMax = data.main.temp_max;
      const tempMaxHtml = document.getElementById("tempmaxcurrent");
      tempMaxHtml.textContent = temperatureMax;

      const temperatureMin = data.main.temp_min;
      const tempMinHtml = document.getElementById("tempmincurrent");
      tempMinHtml.textContent = temperatureMin;

      const humidity = data.main.humidity;
      const humidityHtml = document.getElementById("humiditycurrent");
      humidityHtml.textContent = humidity;

      const pressure = data.main.pressure;
      const pressureHtml = document.getElementById("pressurecurrent");
      pressureHtml.textContent = pressure;

      const description = data.weather[0].description;
      const descHTML = document.getElementById("weatherdescr");
      descHTML.textContent = description;

      // Levels

      const groundLevel = data.main.grnd_level;
      const groundLevelHtml = document.getElementById("groundlevelcurrent");
      groundLevelHtml.textContent = groundLevel;

      const seaLevel = data.main.sea_level;
      const seaLevelHtml = document.getElementById("sealevelcurrent");
      seaLevelHtml.textContent = seaLevel;

      // Wind

      const windDeg = data.wind.deg;
      const windDegHTML = document.getElementById("winddeg");
      windDegHTML.textContent = windDeg;

      const windGust = data.wind.gust;
      const windGustHTML = document.getElementById("windgust");
      windGustHTML.textContent = windGust;

      const windSpeed = data.wind.speed;
      const windSpeedHTML = document.getElementById("windspeed");
      windSpeedHTML.textContent = windSpeed;

      // Cloud

      const cloud = data.clouds.all;
      const cloudHTML = document.getElementById("cloud");
      cloudHTML.textContent = cloud;

      //   const html = `
      //   <h2>Current Weather</h2>
      //   <p>Temperature: ${temperature}°C</p>
      //   <p>Weather: ${description}</p>
      //   <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}">
      // `;
      weatherSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchWeatherData();

//Weather Forecast data
function fetchWeatherForecast() {
  fetch(forecastWeather_ApiUrl)
    .then((response) => response.json())
    .then((data2) => {
      // console.log(data2);

      const forecastHourlyTemp = data2[0].main.temp;
      const forecastHourlyTempHtml = document.getElementById("weathercurrent");
      forecastHourlyTemp.textContent = forecastHourlyTemp;
    });
}
fetchWeatherForecast();

// Polygon Fetching data
function fetchPolygonsData() {
  fetch(pgApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const mapSection = document.querySelector("#map");
      const coords = data[0].center;
      const centerMap = data[0].area;

      //   const html = `
      //   <h2>Current Area</h2>
      //   <p>Area of the lot 1 = ${centerMap}</p>
      //   <p>Coordinate of the lot = ${coords}</p>
      // `;
      mapSection.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching polygons data", error);
    });
}

fetchPolygonsData();

// Fetch Sat Image

function fetchSatImage() {
  fetch(satImageApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // const imageSection = document.querySelector("#image");
      // console.log(data);
      // const imageUrl = data[90].tile;
      // const dswiData = data[0].data.dswi;
      // const sunAzimuth = data[0].sun.azimuth;

      // const satelliteImage = document.getElementById("satellite-image");

      // satelliteImage.src = imageUrl;
      // satelliteImage.alt = "Satellite Image";

      // const html = `
      //   <h2>DSWI</h2>
      //   <p>${dswiData}</p>
      //   <p>${sunAzimuth}</p>
      // `;
      // imageSection.innerHTML = html;

      // console.log("Image URL:", imageUrl);

      const imageUrl = data[0].image.nri;
      const cloudCover = data[0].tile.nri;
      const acquisitionDate = data[0].type;
      const ndviImg = data[100].dc;

      const satelliteImage = document.getElementById("satellite-image");
      satelliteImage.textContent = imageUrl;
      // satelliteImage.src = imageUrl;
      // satelliteImage.src = ndviImg;
      // satelliteImage.alt = "Satellite Image";

      const cloudCoverElement = document.getElementById("cloud-cover");
      cloudCoverElement.textContent = cloudCover;

      const acquisitionDateElement =
        document.getElementById("acquisition-date");
      acquisitionDateElement.textContent = acquisitionDate;
    })
    .catch((error) => {
      console.error("Error fetching satellite imagery data", error);
    });
}

fetchSatImage();

fetch(soil_ApiUrl)
  .then((response) => response.json())
  .then((soildata) => {
    // Extract the DSWI values from the data
    // const dswiValues = data.map((entry) => entry.dswi);
    // console.log(soildata);

    // Process the data and display it on your website
    const soilSection = document.querySelector("#soil");

    // Temp, Humidity and Pressure
    const soilMoisture = soildata.moisture;
    const soilMoistureHtml = document.getElementById("moisture");
    soilMoistureHtml.textContent = soilMoisture;

    const soilTemp = soildata.t0;
    const soilTempHtml = document.getElementById("surfacetemp");
    soilTempHtml.textContent = soilTemp;

    const soilTemp0 = soildata.t10;
    const soilTemp0Html = document.getElementById("belowsurfacetemp");
    soilTemp0Html.textContent = soilTemp0;
    // Do something with the DSWI values, such as display them in a chart

    soilSection.innerHTML = html;
  });

fetch(uvIndex_ApiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract the DSWI values from the data
    // const dswiValues = data.map((entry) => entry.dswi);
    // console.log(data);
    // Do something with the DSWI values, such as display them in a chart
  });

fetch(ndvi_API)
  .then((response) => response.json())
  .then((data) => {
    // Extract the DSWI values from the data
    // const dswiValues = data.map((entry) => entry.dswi);
    console.log(data);
    // Do something with the DSWI values, such as display them in a chart
  });

////////////////////////////////////////////////////////////////////
// Accumulated Temp by geo coordinates

// function fetchAccuTemp() {
//   fetch(accuTemp_ApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchAccuTemp();

// Accumulated Precipitation by geo coordinates

// function fetchAccuPrecp() {
//   fetch(accuPrecp_ApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchAccuPrecp();

// 7 day forecast
