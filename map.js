const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
const polyId = "64302d80176fe647b64424ce";

const lat = -81.71086128571427;
const lon = 33.844481428571434;
const lat2 = -81.70626128571435;
const lon2 = 33.845481428571433;
const lat3 = -81.71296128571426;
const lon3 = 33.846281428571431;
const startDate = "1500336000";
const endDate = "1508976000";
const stateCode = "US-SC";

const apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;

const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=0&end=1&&polyid=${polyId}&coords=${lon},${lat}&appid=${apiKey}`;

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug";

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/satellite-streets-v12", // style URL
  center: [lat, lon], // starting position [lng, lat]
  pitch: 80,
  bearing: 41,
  zoom: 15, // starting zoom
});

// Different Map Styles
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
  input.onclick = (layer) => {
    const layerId = layer.target.id;
    map.setStyle("mapbox://styles/mapbox/" + layerId);
  };
}

// Zoom and pan control on screen
map.addControl(new mapboxgl.NavigationControl());

map.on("load", () => {
  addMarkers(map);
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Lot 1</strong><p>Peach type = Clingstone, <br> Variety = Gold Prince, <br> Area = 5 Acre, <br> Age =~ 5 years, <br> Trees =~ 750</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [lat, lon],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Lot 2</strong><p>Peach type = Freestone, <br> Variety = Summer Gold, <br> Area = 4.5 Acre, <br> Age =~ 7 years, <br> Trees =~ 700</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [lat2, lon2],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Lot 3</strong><p>Peach type = Semi-freestone, <br> Variety = Blaze Prince, <br> Area = 9 Acre, <br> Age =~ 3 years, <br> Trees =~ 1400</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [lat3, lon3],
          },
        },
      ],
    },
  });
  map.addLayer({
    id: "places",
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "#4264fb",
      "circle-radius": 6,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });
  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });

  //   fechSatelliteDataAndMetadata(map);
});

map.on("style.load", () => {
  map.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
    tileSize: 512,
    maxzoom: 14,
  });
  // add the DEM source as a terrain layer with exaggerated height
  map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
});

// Markers
function addMarkers(map) {
  const marker1 = new mapboxgl.Marker({
    color: "red",
  })
    .setLngLat([lat, lon])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 1</h3>"))
    .addTo(map);

  const marker2 = new mapboxgl.Marker({
    color: "blue",
  })
    .setLngLat([lat2, lon2])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 2</h3>"))
    .addTo(map);

  const marker3 = new mapboxgl.Marker({
    color: "green",
  })
    .setLngLat([lat3, lon3])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 3</h3>"))
    .addTo(map);
}
