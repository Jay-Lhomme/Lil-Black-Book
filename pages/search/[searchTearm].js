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
      const filtered = dates.filter((date) => date.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredDates(filtered);
    } else {
      setFilteredDates(dates);
    }
  }, [searchTerm, dates]);

  const handleUpdate = (updatedDate) => {
    // Find the index of the updated date in the dates array
    const index = dates.findIndex((date) => date.firebaseKey === updatedDate.firebaseKey);
    if (index !== -1) {
      // Update the dates array with the updated date
      const updatedDates = [...dates];
      updatedDates[index] = updatedDate;
      setDates(updatedDates);
      setFilteredDates(updatedDates); // Update filteredDates as well
    }
  };

  return (
    <div style={{ color: 'goldenrod' }}>
      {filteredDates.map((date) => (
        <DateCard key={date.firebaseKey} dateObj={date} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default SearchPage;
