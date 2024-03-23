/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleLocation } from '../../api/locationData';
import Intro from '../../components/map/Intro';

export default function ViewLocation() {
  const [locationDetails, setLocationDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleLocation(firebaseKey).then(setLocationDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        {Intro()}
        <img src={locationDetails.dateId?.image} alt={locationDetails.name} style={{ width: '300px', border: 'solid black 5px' }} />
        <Link href="/locations" passHref>
          <Button variant="warning" className="m-2">return</Button>
        </Link>
      </div>
      <div className="text-white ms-5 details">
        <h1>
          <b style={{ color: 'bisque' }}>ADDRESS:</b> {locationDetails.address}
        </h1>
        <hr />
        <h3>
          <b style={{ color: 'bisque' }}>NOTES:</b> {locationDetails.notes}
        </h3>
        <h3>
          <b style={{ color: 'bisque' }}>VISITS:</b> {locationDetails.count}
        </h3>
        <h4>{}</h4>
      </div>
    </div>
  );
}
