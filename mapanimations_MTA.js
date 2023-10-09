mapboxgl.accessToken = '' // TODO: add your own

//Makes the map and sets center position
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-73.940200, 40.740800],
zoom: 11.8,
});

var allMarkers = [];
var manyTrains = [];

async function run() {
const locations = await getMetroLocation();
console.log(new Date());
//  console.log(locations);
const index = locations[0];
//  console.log(index)
const att = index.attributes;
//  console.log(att.longitude, att.latitude);;
manyTrains = [];
var counter = 0;
locations.forEach((element) => {
    let longLat = [];
    longLat.push(
        element.attributes.longitude,
        element.attributes.latitude
    );
    manyTrains.push(longLat);
    //     var marker = new mapboxgl.Marker().setLngLat(longLat).addTo(map);
});
// console.log(manyTrains);
setTimeout(run, 15000);
// console.log(manyTrains);
return manyTrains;
}

async function getMetroLocation() {
    const https = require('https');
    https.get(
      "<Feed URI>",
      { headers: { "x-api-key": '<HTZAPoaadb6Yaz8WkmF4SatEa5xj1n6S1Olf8jBB>'}
      },
      (resp) => {
        resp.on('data', (chunk) => {
          console.log("Receiving Data");
        });
        resp.on('end', () => {
          console.log("Finished receiving data");
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
const response = await fetch(https);
const json = await response.json();
return json.data;
}


// TODO: Subway subtitution:

// const https = require('https');
// https.get(
//   "<Feed URI>",
//   { headers: { "x-api-key": '<HTZAPoaadb6Yaz8WkmF4SatEa5xj1n6S1Olf8jBB>'}
//   },
//   (resp) => {
//     resp.on('data', (chunk) => {
//       console.log("Receiving Data");
//     });
//     resp.on('end', () => {
//       console.log("Finished receiving data");
//     });
//   }).on("error", (err) => {
//     console.log("Error: " + err.message);
//   });

// TODO: End Subway sub 

/*
async function initialPos() {
pos = await manyTrains
pos.forEach(element => {
var marker = new mapboxgl.Marker().setLngLat(element).addTo(map);
})
}  
*/

setTimeout(() => {
console.log(manyTrains);
}, 2000);

// setTimeout(() => {
//     forEach(element => {
//         var marker = new mapboxgl.Marker().setLngLat(element).addTo(map);
//     })
// }, 2000);

setTimeout(() => {
for (i = 0; i < manyTrains.length; i++) {
    allMarkers[i] = new mapboxgl.Marker()
        .setLngLat(manyTrains[i])
        .addTo(map);
}
}, 1500);

var counter = 0;
function move() {
setTimeout(() => {
    if (counter >= manyTrains.length) return;
    allMarkers[counter].setLngLat(manyTrains[counter]);
    counter++;
    move();
}, 15000);
}

// initialPos()
run();
