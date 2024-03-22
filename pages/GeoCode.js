// const geocoder;
//   const map;
//   function initialize() {
//     geocoder = new google.maps.Geocoder();
//     const latlng = new google.maps.LatLng(-34.397, 150.644);
//     const mapOptions = {
//       zoom: 8,
//       center: latlng
//     }
//     map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   }

//   function codeAddress() {
//     const address = document.getElementById('address').value;
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status == 'OK') {
//         map.setCenter(results[0].geometry.location);
//         const marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location
//         });
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }
// return
// <body onload="initialize()">
//  <div id="map" style="width: 320px; height: 480px;"></div>
//   <div>
//     <input id="address" type="textbox" value="Sydney, NSW">
//     <input type="button" value="Encode" onclick="codeAddress()">
//   </div>
// </body>

// import React, { useEffect } from 'react';

// function MapWithMarker() {
//   useEffect(() => {
//     const geocoder = new window.google.maps.Geocoder();
//     const latlng = new window.google.maps.LatLng(-34.397, 150.644);
//     const mapOptions = {
//       zoom: 8,
//       center: latlng,
//     };
//     const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

//     function codeAddress() {
//       const address = document.getElementById('address').value;
//       geocoder.geocode({ address }, (results, status) => {
//         if (status === 'OK') {
//           map.setCenter(results[0].geometry.location);
//           const marker = new window.google.maps.Marker({
//             map,
//             position: results[0].geometry.location,
//           });
//         } else {
//           alert(`Geocode was not successful for the following reason: ${status}`);
//         }
//       });
//     }

//     window.initialize = () => {
//       codeAddress();
//     };

//     // Cleanup
//     return () => {
//       delete window.initialize;
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <div id="map" style={{ width: '320px', height: '480px' }} />
//       <div>
//         <input id="address" type="textbox" defaultValue="Sydney, NSW" />
//         <input type="button" value="Encode" onClick={window.codeAddress} />
//       </div>
//     </div>
//   );
// }

// export default MapWithMarker;
