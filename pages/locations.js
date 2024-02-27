/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getLocations } from '../api/locationData';
import LocationCard from '../components/LocationCard';

function Locations() {
  const [locations, setLocations] = useState([]);

  const { user } = useAuth();

  const getAllTheLocations = () => {
    getLocations(user.uid).then(setLocations);
  };

  useEffect(() => {
    getAllTheLocations();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/locations/new" passHref>
        <Button>Add a Location</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {locations.map((location) => (
          <LocationCard key={location.firebaseKey} locationObj={location} onUpdate={getAllTheLocations} />
        ))}
      </div>
    </div>
  );
}

// let map;
// const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
// const zoom = 14;
// const url = 'https://maps.googleapis.com/maps/api/staticmap';
// // @ts-ignore google.maps.plugins
// const loader = new Loader({
//   apiKey: googleApiKey,
//   version: 'weekly',
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const wrapper = document.getElementById('wrapper');

//   wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=googleApiKey)`;
//   wrapper.addEventListener('click', () => {
//     wrapper.remove();
//     loader.load().then(() => {
//       map = new google.maps.Map(document.getElementById('map'), {
//         center,
//         zoom,
//       });
//     });
//   });
// });

// let map;
// let loaderInitialized = false;

// const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
// const zoom = 14;
// const url = 'https://maps.googleapis.com/maps/api/staticmap';
// const apiKey = 'AIzaSyDc8SuucoLBdKIASTmqUywkQatgbmPYpkM'; // Ensure apiKey is a string

// document.addEventListener('DOMContentLoaded', () => {
//   const wrapper = document.getElementById('wrapper');

//   wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight})`;
//   wrapper.addEventListener('click', () => {
//     wrapper.remove();
//     if (!loaderInitialized) {
//       const loader = new Loader({
//         apiKey: apiKey,
//         version: 'weekly',
//       });
//       loaderInitialized = true;
//       loader.load().then(() => {
//         // Correctly initialize the map inside an HTML element
//         const mapElement = document.getElementById('map');
//         map = new google.maps.Map(mapElement, {
//           center,
//           zoom,
//         });
//       });
//     }
//   });
// });

// Check if the Loader object has already been initialized
// if (!window.google || !window.google.maps) {
//   const loader = new Loader({
//     apiKey: apiKey,
//     version: 'weekly',
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const wrapper = document.getElementById('wrapper');

//   wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight})`;
//   wrapper.addEventListener('click', () => {
//     wrapper.remove();
//     loader.load().then(() => {
//       // Correctly initialize the map inside an HTML element
//       const mapElement = document.getElementById('map');
//       map = new google.maps.Map(mapElement, {
//         center,
//         zoom,
//       });
//     });
//   });
// });

// let map;
// // initMap is now async
// async function initMap() {
//   // Request libraries when needed, not in the script tag.
//   const { Map } = await google.maps.importLibrary('maps');
//   // Short namespaces can be used.
//   map = new Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

export default Locations;
