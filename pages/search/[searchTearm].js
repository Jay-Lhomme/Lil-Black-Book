/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getDates } from '../../api/dateData';
import DateCard from '../../components/DateCard';

const SearchPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  const [dates, setDates] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);

  useEffect(() => {
    getDates()
      .then((datesArray) => {
        setDates(datesArray);
        setFilteredDates(datesArray);
      });
  }, []);

  useEffect(() => {
    if (searchTerm && searchTerm !== '') {
      const filtered = dates.filter((date) => date.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredDates(filtered);
    } else {
      setFilteredDates(dates);
    }
  }, [searchTerm, dates]);

  return (
    <div style={{ color: 'goldenrod' }}>
      {filteredDates.map((date) => (
        <DateCard key={date.firebaseKey} dateObject={date} onUpdate={dates} />
      ))}
    </div>
  );
};

export default SearchPage;
