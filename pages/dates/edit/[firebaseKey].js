import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDate } from '../../../api/dateData';
import DateForm from '../../../components/forms/DateForm';

export default function EditDate() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDate(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<DateForm obj={editItem} />);
}
