/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import viewLogDetails from '../../api/mergedData';
// import { getSingleLog } from '../../api/logData';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { viewLogDetails } from '../../api/mergedData';

export default function ViewLog() {
  const [logDetails, setLogDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewLogDetails(firebaseKey).then(setLogDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={logDetails.image} alt={logDetails.dateObj?.name} style={{ width: '300px' }} />
        <Link href="/logs" passHref>
          <Button variant="warning" className="m-2">return</Button>
        </Link>
      </div>
      <div className="text-white ms-5 details">
        <h1>
          <b style={{ color: 'bisque' }}>DATE:</b> {logDetails.name}
        </h1>
        <h1>
          <b style={{ color: 'bisque' }}>LOCATION:</b> {logDetails.locationObj?.name}
        </h1>
        <hr />
        <h3>
          <b style={{ color: 'bisque' }}>DAY:</b> {logDetails.day}
        </h3>
        <h4>
          <b style={{ color: 'bisque' }}>NOTES:</b> {logDetails.notes}
        </h4>
        <h4>{}</h4>
      </div>
    </div>
  );
}
