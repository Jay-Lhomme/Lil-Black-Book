/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getLocations } from '../../api/locationData';
import LocationCard from '../../components/LocationCard';

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

export default Locations;
