import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getDates = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getActiveDates = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const active = Object.values(data).filter((date) => date.active === true);
      resolve(active);
    })
    .catch(reject);
});

const getInactiveDates = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/dates.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const active = Object.values(data).filter((date) => date.active === false);
      resolve(active);
    })
    .catch(reject);
});

const scorchedEarthDates = () => new Promise((resolve, reject) => {
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

const newEarthDates = (payload) => new Promise((resolve, reject) => {
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

const testDlt = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/truth.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .then((data) => resolve(data))
    .catch(reject);
});

const test2get = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/truth.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify('test'),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const test3uid = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/truth.json?orderBy="uid"&equalTo="${uid}"`, {
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
const test4fbk = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/truth/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getDates, getSingleDate, createDate, deleteSingleDate, updateDate, getDatesLogs, getActiveDates, getInactiveDates, scorchedEarthDates, newEarthDates, test2get, testDlt, test3uid, test4fbk,
};
