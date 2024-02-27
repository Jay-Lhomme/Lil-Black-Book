import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LogForm from '../../../components/forms/LogForm';
import { getSingleLog } from '../../../api/logData';

export default function EditLog() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleLog(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<LogForm obj={editItem} />);
}
