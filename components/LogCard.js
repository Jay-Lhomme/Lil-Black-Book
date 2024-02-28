/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteSingleLog } from '../api/logData';

function LogCard({ logObj, onUpdate }) {
  const deleteThislog = () => {
    if (window.confirm(`Delete ${logObj.dateId}`)) {
      deleteSingleLog(logObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '18rem', margin: '10px', background: 'dimgrey', color: 'seashell', border: 'solid goldenrod 5px',
    }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: '30px' }}><b style={{ color: 'bisque' }}>{logObj.dateId}</b></Card.Title>
        <Card.Subtitle className="mb-2">{logObj.locationId}</Card.Subtitle>
        <Card.Text>
          {logObj.notes}
        </Card.Text>
        <Card.Footer>{logObj.day}</Card.Footer>
        {/* NOTES BUTTON */}
        <Link href={`/logs/${logObj.firebaseKey}`} passHref>
          <Button variant="success" className="m-2">Notes</Button>
        </Link>
        {/* EDIT BUTTON */}
        <Link href={`/logs/edit/${logObj.firebaseKey}`} passHref>
          <Button variant="warning">EDIT</Button>
        </Link>
        {/* {DELETE BUTTON} */}
        <Button variant="danger" onClick={deleteThislog} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

LogCard.propTypes = {
  logObj: PropTypes.shape({
    day: PropTypes.string,
    dateId: PropTypes.string,
    locationId: PropTypes.string,
    notes: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  dateId: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  locationId: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LogCard;
