import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getDates = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json`, {
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

const getSingleDate = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createDate = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json`, {
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

const deleteSingleDate = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

const updateDate = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates/${payload.firebaseKey}.json`, {
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

const getDatesLogs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs.json?orderBy="dateId"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const scorchedEarth = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getDates, getSingleDate, createDate, deleteSingleDate, updateDate, getDatesLogs, scorchedEarth,
};
