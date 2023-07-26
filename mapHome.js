// Dashboard - Tree image
let selectMenu = document.querySelector("#products");
let heading = document.querySelector(".dropdown-image h2");

let imageContainer = document.querySelector(".product-wrapper");
let dataContainer = document.querySelector(".sensor-data-wrapper");

selectMenu.addEventListener("change", function () {
  let categoryName = this.value;
  heading.innerHTML = this[this.selectedIndex].text;

  let http = new XMLHttpRequest();
  // We are going to fetch the server's response later on.

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      // let response = this.responseText;
      let out = "";
      for (let item of response) {
        out += `
                    <div class="tree-image">
                        <img src="${item.image_name}" alt="">
                    </div>
            `;
      }
      imageContainer.innerHTML = out;
    }
  };
  http.open("POST", "mapHomeScript.php", true);
  http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  http.send("tree_name=" + categoryName);
});

// selectMenu.addEventListener("change", function () {
//   let categoryName = this.value;
//   heading.innerHTML = this[this.selectedIndex].text;

//   let http = new XMLHttpRequest();
//   // We are going to fetch the server's response later on.

//   http.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let response = JSON.parse(this.responseText);
//       // let response = this.responseText;
//       let out = "";
//       for (let item of response) {
//         out += `
//                     <div class="sensor-data">
//                         <h5> LIVE </h5>
//                         <p class="temperature">T = ${item.temperature} °F</p>
//                         <p class="soil-temperature">T (soil) = ${item.soil_temperature} °F</p>
//                         <p class="humidity">Humidity = ${item.humidity}  %</p>
//                         <p class="pressure">P = ${item.pressure}  hPa</p>
//                         <p class="ec">EC = ${item.EC}  dS/m</p>
//                         <p class="wind-speed">Wind = ${item.wind_speede}  mph</p>
//                     </div>
//             `;
//       }
//       dataContainer.innerHTML = out;
//     }
//   };
//   http.open("POST", "mapHomeScript.php", true);
//   http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   http.send("tree_name=" + categoryName);
// });
