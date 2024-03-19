import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getLocations = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getSingleLocation = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createLocation = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations.json`, {
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

const deleteSingleLocation = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

const updateLocation = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations/${payload.firebaseKey}.json`, {
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

const getLocationsLogs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/logs.json?orderBy="locationId"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const scorchedEarthLocations = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/locations.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

const newEarthLocations = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}.json`, {
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

export {
  getLocations, getSingleLocation, deleteSingleLocation, createLocation, updateLocation, getLocationsLogs, scorchedEarthLocations, newEarthLocations,
};
