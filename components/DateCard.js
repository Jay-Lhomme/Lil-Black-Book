import { Button, Card, CardHeader } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// import { deleteSingleDate } from '../api/dateData';
import { deleteDatesLogs } from '../api/mergedData';

function DateCard({ dateObj, onUpdate }) {
  const router = useRouter();
  const deleteThisDate = () => {
    if (window.confirm(`Delete ${dateObj.name}?`)) {
      deleteDatesLogs(dateObj.firebaseKey).then(() => onUpdate()).then(() => {
        router.push('/dates');
      });
    }
  };

  const dateCount = () => {
    if (dateObj.count === '1') {
      return 'First';
    } if (dateObj.count === '2') {
      return 'Second';
    } if (dateObj.count === '3') {
      return 'Third';
    } if (dateObj.count === '4') {
      return 'Fouth';
    } if (dateObj.count === '5') {
      return 'Fith';
    } if (dateObj.count === '0') {
      return 'One Day';
    }
    return 'King';
  };

  const flagCount = () => {
    if (dateObj.flag === '1') {
      return 'goldenrod';
    } if (dateObj.flag === '2') {
      return 'orangered';
    } if (dateObj.flag === '3') {
      return 'darkred';
    } if (dateObj.flag === '4') {
      return 'black';
    }
    return 'dimgrey';
  };

  return (
    <Card style={{
      background: flagCount(dateObj), width: '18rem', margin: '10px', border: 'solid goldenrod 5px',
    }}
    >
      <CardHeader style={{ fontStyle: 'bold', fontSize: '30px', color: 'seashell' }}>{dateCount(dateObj)}</CardHeader>
      <Card.Img variant="top" src={dateObj.image} alt={dateObj?.name} style={{ height: '300px', border: 'solid 1px black' }} />
      <Card.Body>
        <Card.Title>{dateObj.name}</Card.Title>
        {/* VIEW BUTTON */}
        <Link href={`/dates/${dateObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* EDIT BUTTON */}
        <Link href={`/dates/edit/${dateObj.firebaseKey}`} passHref>
          <Button variant="warning">EDIT</Button>
        </Link>
        {/* {DELETE BUTTON} */}
        <Button variant="danger" onClick={deleteThisDate} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

DateCard.propTypes = {
  dateObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    flag: PropTypes.string,
    count: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DateCard;
