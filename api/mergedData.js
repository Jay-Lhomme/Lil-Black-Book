import { deleteSingleDate, getDatesLogs, getSingleDate } from './dateData';
import { deleteSingleLocation, getLocationslogs, getSingleLocation } from './locationData';
import { deleteSingleLog, getSingleLog } from './logData';

// const viewLogDetails = (logFirebaseKey) => new Promise((resolve, reject) => {
//   getSingleLog(logFirebaseKey)
//     .then((logObject) => {
//       getSingleDate(logObject.dateId)
//         .then((dateObject) => {
//           resolve({ ...logObject, dateObject });
//         });
//     }).catch((error) => reject(error));
// });

const viewLogDetails = (logFirebaseKey) => new Promise((resolve, reject) => {
  getSingleLog(logFirebaseKey)
    .then((logObject) => {
      getSingleDate(logObject.dateId)
        .then((dateObject) => {
          getSingleLocation(logObject.locationId)
            .then((locationObject) => {
              resolve({ ...logObject, dateObject, locationObject });
            })
            .catch(reject);
        })
        .catch(reject);
    })
    .catch(reject);
});

const deleteDatesLogs = (dateId) => new Promise((resolve, reject) => {
  getDatesLogs(dateId).then((logsArray) => {
    console.warn(logsArray, 'Date Logs');
    const deleteLogPromises = logsArray.map((Log) => deleteSingleLog(Log.firebaseKey));

    Promise.all(deleteLogPromises).then(() => {
      deleteSingleDate(dateId).then(resolve);
    });
  }).catch((error) => reject(error));
});

const deleteLocationLogs = (locationId) => new Promise((resolve, reject) => {
  getLocationslogs(locationId).then((logsArray) => {
    console.warn(logsArray, 'Location Logs');
    const deletelogPromises = logsArray.map((log) => deleteSingleLog(log.locationId));

    Promise.all(deletelogPromises).then(() => {
      deleteSingleLocation(locationId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewLogDetails, deleteDatesLogs, deleteLocationLogs };
