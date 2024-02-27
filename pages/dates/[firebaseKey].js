/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDate } from '../../api/dateData';

export default function ViewDate() {
  const [dateDetails, setDateDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDate(firebaseKey).then(setDateDetails);
  }, [firebaseKey]);

  const flagCount = () => {
    if (dateDetails.flag === '1') {
      return 'solid goldenrod 20px';
    } if (dateDetails.flag === '2') {
      return 'solid orangered 20px';
    } if (dateDetails.flag === '3') {
      return 'solid darkred 20px';
    } if (dateDetails.flag === '4') {
      return 'solid black 20px';
    }
    return 'solid dimgrey 20px';
  };

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={dateDetails.image} alt={dateDetails.name} style={{ width: '300px', border: flagCount(dateDetails.flag) }} />
      </div>
      <div className="text-white ms-5 details">
        <h1>
          <b style={{ color: 'bisque' }}>NAME:</b> {dateDetails.name}
        </h1>
        <hr />
        <h3><b style={{ color: 'bisque' }}>GENDER:</b> {dateDetails.gender}</h3>
        <h4>
          <b style={{ color: 'bisque' }}>AGE:</b> {dateDetails.age}
        </h4>
        <h3>
          <b style={{ color: 'bisque' }}>ORIENTATION:</b> {dateDetails.orientation}
        </h3>
        <h4>
          <b style={{ color: 'bisque' }}>RELATION:</b> {dateDetails.relation}
        </h4>
        <h4>
          <b style={{ color: 'bisque' }}>EMAIL:</b> {dateDetails.email}
        </h4>
        <h4>
          <b style={{ color: 'bisque' }}>NOTES:</b> {dateDetails.notes}
        </h4>
        <h4>
          <b style={{ color: 'bisque' }}>DATES:</b> {dateDetails.count}
        </h4>
        <h4>
          <b style={{ color: 'bisque' }}>RED FLAGS:</b> {dateDetails.flag}
        </h4>
      </div>
    </div>
  );
}
