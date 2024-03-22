// /* eslint-disable react-hooks/exhaustive-deps */
// import { Button } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
// import { getActiveDates, getInactiveDates, getDates } from '../../api/dateData';
// import DateCard from '../../components/DateCard';

// function Dates() {
//   const [dates, setDates] = useState([]);

//   const { user } = useAuth();

//   const getAllTheDates = () => {
//     getDates(user.uid).then(setDates);
//   };

//   const getAllTheActiveDates = () => {
//     getActiveDates(user.uid).then(setDates);
//   };

//   const getAllTheInactiveDates = () => {
//     getInactiveDates(user.uid).then(setDates);
//   };

//   useEffect(() => {
//     getAllTheDates();
//   }, []);

//   return (
//     <div className="text-center my-4" style={{ padding: '10px' }}>
//       <Button onClick={getAllTheDates} className="btnF" variant="warning">All Dates</Button>
//       <Button onClick={getAllTheActiveDates} className="btnF" variant="warning">Active Dates</Button>
//       <Button onClick={getAllTheInactiveDates} className="btnF" variant="warning">Inactive Dates</Button>
//       <Link href="/dates/new" passHref>
//         <Button className="btnF" variant="warning">Add a Date</Button>
//       </Link>
//       <div className="d-flex flex-wrap">
//         {dates.map((date) => (
//           <DateCard key={date.firebaseKey} dateObj={date} onUpdate={getAllTheDates} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dates;
