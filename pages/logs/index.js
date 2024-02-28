/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getLogs } from '../../api/logData';
import LogCard from '../../components/LogCard';

function Logs() {
  const [logs, setLogs] = useState([]);

  const { user } = useAuth();

  const getAllTheLogs = () => {
    getLogs(user.uid).then(setLogs);
  };
  useEffect(() => {
    getAllTheLogs();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/logs/new" passHref>
        <Button>Add a Log</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {logs.map((log) => (
          <LogCard key={log.firebaseKey} logObj={log} onUpdate={getAllTheLogs} />
        ))}
      </div>
    </div>
  );
}

export default Logs;
