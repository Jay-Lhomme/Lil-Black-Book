import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getLogs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleLog = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createLog = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleLog = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

const updateLog = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getLogs, getSingleLog, deleteSingleLog, createLog, updateLog,
};
