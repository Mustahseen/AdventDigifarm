// Replace YOUR_API_KEY with your actual API key
const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
const polyId = "64302d80176fe647b64424ce";

const lat = -81.71086128571427;
const lon = 33.844481428571434;
const startDate = "1500336000";
const endDate = "1508976000";
// Construct the URL for the AgroMonitoring API endpoint you want to access
const apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;
// const satImageApiUrl = `http://api.agromonitoring.com/agro/1.0/image/search?start=${startDate}&end=${endDate}&polyid=${polyId}&appid=${apiKey}`;
const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=0&end=1&&polyid=${polyId}&coords=${lon},${lat}&appid=${apiKey}`;

// Weather Fetching Data
function fetchWeatherData() {
  // Fetch the data from the API using the URL and API key
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Process the data and display it on your website
      const weatherSection = document.querySelector("#weather");
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const html = `
      <h2>Current Weather</h2>
      <p>${temperature}°C</p>
      <p>${description}</p>
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}">
    `;
      weatherSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchWeatherData();

// Polygon Fetching data
function fetchPolygonsData() {
  fetch(pgApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const mapSection = document.querySelector("#map");
      const coords = data[0].center;
      const centerMap = data[0].area;
      const html = `
      <h2>Current Area</h2>
      <p>${centerMap}</p>
      <p>${coords}</p>
    `;
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
      const imageSection = document.querySelector("#image");
      console.log(data);
      const imageUrl = data[90].tile;

      const satelliteImage = document.getElementById("satellite-image");

      satelliteImage.src = imageUrl;
      satelliteImage.alt = "Satellite Image";

      // const html = `
      //   <h2>Satellite Image Data</h2>
      //   <p>${imageUrl}</p>
      // `;
      // imageSection.innerHTML = html;

      console.log("Image URL:", imageUrl);

      // const imageUrl = data.features[0].properties.image;
      // const cloudCover = data.features[0].properties.clouds;
      // const acquisitionDate = data.features[0].properties.acquired_date;
      // const ndviImg = data[0].image.ndvi;

      // const satelliteImage = document.getElementById("satellite-image");
      // satelliteImage.src = imageUrl;
      // satelliteImage.src = ndviImg;
      // satelliteImage.alt = "Satellite Image";

      // const cloudCoverElement = document.getElementById("cloud-cover");
      // cloudCoverElement.textContent = cloudCover;

      // const acquisitionDateElement =
      //   document.getElementById("acquisition-date");
      // acquisitionDateElement.textContent = acquisitionDate;
    })
    .catch((error) => {
      console.error("Error fetching satellite imagery data", error);
    });
}

fetchSatImage();
