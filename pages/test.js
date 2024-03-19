// // import { button } from 'bootstrap';

// // import { getLocationslogs } from '../api/locationData';
// import { deleteTruthLogs } from '../api/mergedData';
// import { useAuth } from '../utils/context/authContext';

// // import { test, test2 } from '../api/dateData';

// function Lies() {
//   // const handleTruth = (locationId) => {
//   //   getLocationslogs(locationId);
//   //   console.warn(getLocationslogs('mickeys'));
//   // };

//   const { user } = useAuth();
//   const handleTruth = () => (
//     deleteTruthLogs(user.uid)
//   );

//   return (
//     <button type="button" onClick={handleTruth}>Test</button>
//   );
// }

// export default Lies;

import { useMemo } from 'react';
import { GoogleMap, useLoadScript, AdvancedMarker } from '@react-google-maps/api';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <AdvancedMarker position={center} />
    </GoogleMap>
  );
}
