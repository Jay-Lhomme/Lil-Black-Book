/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import viewLogDetails from '../../api/mergedData';
// import { getSingleLog } from '../../api/logData';
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
        <img src={logDetails.dateId?.image} alt={logDetails.dateId?.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h1>
          <b style={{ color: 'bisque' }}>DATE:</b> {logDetails.dateId}
        </h1>
        <h1>
          <b style={{ color: 'bisque' }}>LOCATION:</b> {logDetails.locationId}
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
