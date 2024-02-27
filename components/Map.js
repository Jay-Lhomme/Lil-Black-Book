// import { useEffect, useState } from 'react';

// function Map() {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const loadMap = async () => {
//       try {
//         // Load the Google Maps library asynchronously
//         const { Map } = await window.google.maps.importLibrary('maps');

//         // Create a new map instance
//         const newMap = new Map(document.getElementById('map'), {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 8,
//         });

//         // Set the map state
//         setMap(newMap);
//       } catch (error) {
//         console.error('Error loading Google Maps:', error);
//       }
//     };

//     // Check if Google Maps API is already loaded
//     if (window.google && window.google.maps) {
//       loadMap();
//     } else {
//       // If not loaded, listen for the 'google-maps-api-loaded' event
//       window.addEventListener('google-maps-api-loaded', loadMap);
//     }

//     // Cleanup
//     return () => {
//       window.removeEventListener('google-maps-api-loaded', loadMap);
//     };
//   }, []); // Run only once on component mount

//   return (
//     <div id="map" style={{ width: '100%', height: '400px' }}>
//       {/* Rendered map will appear here */}
//     </div>
//   );
// }

// export default Map;
