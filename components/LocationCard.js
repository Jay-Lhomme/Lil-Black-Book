import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
// import { deleteSingleLocation } from '../api/locationData';
import { deleteLocationLogs } from '../api/mergedData';

function LocationCard({ locationObj, onUpdate }) {
  const deleteThisLocation = () => {
    if (window.confirm(`Delete ${locationObj.name}?`)) {
      deleteLocationLogs(locationObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '18rem', margin: '10px', background: 'dimgrey', color: 'seashell',
    }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>{locationObj.name}</Card.Title>
      <Card.Subtitle>{locationObj.address}</Card.Subtitle>
      <Card.Text>
        Visits: {locationObj.count}
      </Card.Text>
      {/* NOTES BUTTON */}
      <Link href={`/locations/${locationObj.firebaseKey}`} passHref>
        <Button variant="success" className="m-2">Notes</Button>
      </Link>
      {/* EDIT BUTTON */}
      <Link href={`/locations/edit/${locationObj.firebaseKey}`} passHref>
        <Button variant="warning" className="m-2">EDIT</Button>
      </Link>
      {/* {DELETE BUTTON} */}
      <Button variant="danger" onClick={deleteThisLocation} className="m-2">
        DELETE
      </Button>
    </Card>
  );
}

LocationCard.propTypes = {
  locationObj: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    notes: PropTypes.string,
    count: PropTypes.number,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LocationCard;
