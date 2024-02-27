/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getDates } from '../../api/dateData';
import DateCard from '../../components/DateCard';

function Dates() {
  const [dates, setDates] = useState([]);

  const { user } = useAuth();

  // const getAllTheDates = useCallback(() => {
  //   getDates(user.uid).then(setDates);
  // });

  const getAllTheDates = () => {
    getDates(user.uid).then(setDates);
  };
  useEffect(() => {
    getAllTheDates();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/dates/new" passHref>
        <Button>Add a Date</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {dates.map((date) => (
          <DateCard key={date.firebaseKey} dateObj={date} onUpdate={getAllTheDates} />
        ))}
      </div>
    </div>
  );
}

export default Dates;
