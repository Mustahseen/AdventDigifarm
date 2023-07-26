mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMmg0OWMwOTAwM3FuMHRlbTVjdzdlIn0.rlpj2j7vgePU6PEL2VTx7A";
(async () => {
  const map = new mapboxgl.Map({
    container: "map",
    zoom: 13,
    center: [6.6301, 45.35625],
    pitch: 80,
    bearing: 160,
    interactive: false,
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/satellite-v9",
  });

  await map.once("style.load");

  // Add daytime fog
  map.setFog({
    range: [-1, 2],
    "horizon-blend": 0.3,
    color: "white",
    "high-color": "#add8e6",
    "space-color": "#d8f2ff",
    "star-intensity": 0.0,
  });

  // Add 3D terrain
  map.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.terrain-rgb",
    tileSize: 512,
    maxzoom: 14,
  });
  map.setTerrain({
    source: "mapbox-dem",
    exaggeration: 1.5,
  });

  // Run a timing loop to switch between day and night
  await map.once("idle");

  let lastTime = 0.0;
  let animationTime = 0.0;
  let cycleTime = 0.0;
  let night = true;

  const initialBearing = map.getBearing();

  function frame(time) {
    const elapsedTime = (time - lastTime) / 1000.0;

    animationTime += elapsedTime;
    cycleTime += elapsedTime;

    if (cycleTime >= 10.0) {
      if (night) {
        // night fog styling
        map.setFog({
          range: [-1, 2],
          "horizon-blend": 0.3,
          color: "#242B4B",
          "high-color": "#161B36",
          "space-color": "#0B1026",
          "star-intensity": 0.8,
        });
      } else {
        // day fog styling
        map.setFog({
          range: [-1, 2],
          "horizon-blend": 0.3,
          color: "white",
          "high-color": "#add8e6",
          "space-color": "#d8f2ff",
          "star-intensity": 0.0,
        });
      }

      night = !night;
      cycleTime = 0.0;
    }

    const rotation = initialBearing + animationTime * 2.0;
    map.setBearing(rotation % 360);

    lastTime = time;

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
})();
