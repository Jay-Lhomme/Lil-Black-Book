// import { button } from 'bootstrap';

import { getLocationslogs } from '../api/locationData';

// import { test, test2 } from '../api/dateData';

function Lies() {
  const handleTruth = (locationId) => {
    getLocationslogs(locationId);
    console.warn(getLocationslogs('mickeys'));
  };
  return (
    <button type="button" onClick={handleTruth}>Test</button>
  );
}

export default Lies;
