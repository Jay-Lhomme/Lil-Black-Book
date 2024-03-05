// import { button } from 'bootstrap';

// import { getLocationslogs } from '../api/locationData';
import { deleteTruthLogs } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';

// import { test, test2 } from '../api/dateData';

function Lies() {
  // const handleTruth = (locationId) => {
  //   getLocationslogs(locationId);
  //   console.warn(getLocationslogs('mickeys'));
  // };

  const { user } = useAuth();
  const handleTruth = () => (
    deleteTruthLogs(user.uid)
  );

  return (
    <button type="button" onClick={handleTruth}>Test</button>
  );
}

export default Lies;
