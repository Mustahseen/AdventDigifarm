<?php include "mapHomeFunctions.php" ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="maphomestyle.css">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
    <link rel="stylesheet" href="maphomestyle.css">
    <title>Map Image Trial</title>
</head>

<body>
    <div class="navbar">
        <div class="topbar">
            <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div class="search">
                <label>
                    <input type="text" placeholder="Search">
                    <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>

            <div class="user">
                <img src="./ADFlogo.png" alt="">
            </div>
        </div>
    </div>
    <nav class="sidebar">
        <div class="container">
            <ul>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="leaf-outline"></ion-icon>
                        </span>
                        <span class="title">Advent Digi-Farm</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        </span>
                        <span class="title">Message</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span class="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <main class="dashboard">
        <div class="card">
            <h1>Titan Farm, Lot 1</h1>
            <div class="wrapper">
                <div class="dropdown-menu">
                    <select name="products" id="products">
                        <option value="t0"></option>
                        <option value="Tree-R1-T1-L">Tree-R1-T1-L</option>
                        <option value="Tree-R1-T2-L">Tree-R1-T2-L</option>
                        <option value="Tree-R1-T3-L">Tree-R1-T3-L</option>
                        <option value="Tree-R1-T24-L">Tree-R1-T24-L</option>
                        <option value="Tree-R2-T23-L">Tree-R2-T23-L</option>
                        <option value="Tree-R2-T24-L">Tree-R2-T24-L</option>
                        <option value="Tree-R2-T25-L">Tree-R2-T25-L</option>
                    </select>
                </div>
                <div class="dropdown-image">
                    <h2>Select Tree ID</h2>
                    <div class="product-wrapper">
                        <?php
                            $products = getAllProducts();
                            foreach ($products as $product){
                                ?>
                        <div class="tree">
                            <div class="tree-image">
                                <img src="<?php echo $product['image_name'] ?>" alt="">
                            </div>
                        </div>
                        <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>


        <div class="card">
            <div id="map">
                <h2>Advent Sensor Package</h2>
            </div>
        </div>


        <div class="card">
            <div class="sensor-package-data">
                <div class="data-wrapper">
                    <h1>Live Datafeed from sensor package</h1>

                    <div class="data-box">
                        <!-- <img src="./background/Digi-Node.png" class="other-icon"> -->
                        <?php
                                $products = getAllData();
                                foreach ($products as $product){
                                    ?>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="temperature">T</p>
                            <p class="temperature-"><?php echo $product['temp'] ?> °F</p>
                        </div>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="soil-temperature">T (soil) </p>
                            <p class="soil-temperature-"><?php echo $product['soil_temp'] ?> °F</p>
                        </div>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="humidity"> Humidity </p>
                            <p class="humidity-"><?php echo $product['humidity'] ?> %</p>
                        </div>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="pressure">P</p>
                            <p class="pressure-"><?php echo $product['pressure'] ?> hPa</p>
                        </div>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="ec">EC</p>
                            <p class="ec-"><?php echo $product['elec_conductivity'] ?> dS/m</p>
                        </div>
                        <div class="sensor-data">
                            <!-- <img src="./icons/sprout.png" class="other-icon"> -->
                            <p class="wind-speed">Wind</p>
                            <p class="wind-speed-"><?php echo $product['wind_speed'] ?> mph</p>
                        </div>
                        <?php
                                }
                            ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="image">
                <div>
                    <h1>Hello</h1>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="daily-forecast">
                <div class="today" id="current-temp">
                    <h2>Daily</h2>
                    <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                    <div class="others">
                        <div class="day">Wednesday</div>
                        <!-- <div class="current-temp"></div> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                </div>
                <div class="weather-forecast" id="weather-forecast">
                    <div class="weather-forecast-item">
                        <div class="day">Thursday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">Friday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">Saturday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">Sunday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">Monday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">Tuesday</div>
                        <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" /> -->
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="hourly-forecast">
                <h2>Hourly</h2>
                <div class="weather-forecast" id="hourly-forecast">

                    <div class="weather-forecast-item">
                        <div class="day">11 PM</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">2 PM</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">3 PM</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">4 PM</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">5 PM</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                    <div class="weather-forecast-item">
                        <div class="day">6 PMy</div>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                        <div class="temp">Night - 25.6&#176; C</div>
                        <div class="temp">Day - 29.6&#176; C</div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <script src="https://cdn.plot.ly/plotly-2.4.2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
    <script src="./firebase.js"></script>
    <script src="mapHome.js"></script>
    <script src="barHome.js"></script>
    <script src="lotMap.js"></script>
    <script src="mapHomeForecast.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>

    ========= ionicon ===========
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>

</html>