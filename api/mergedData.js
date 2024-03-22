/* eslint-disable no-useless-catch */
import {
  deleteSingleDate, getDatesLogs, getSingleDate, test3uid, test4fbk,
} from './dateData';
import { deleteSingleLocation, getLocationsLogs, getSingleLocation } from './locationData';
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
    .then((logObj) => {
      getSingleDate(logObj.dateId)
        .then((dateObj) => {
          getSingleLocation(logObj.locationId)
            .then((locationObj) => {
              resolve({ ...logObj, dateObj, locationObj });
            });
        });
    })
    .catch((error) => reject(error));
});

// const viewLogDetails = async (logFirebaseKey) => {
//   try {
//     // Fetch the log data
//     const logObj = await getSingleLog(logFirebaseKey);
//     // Fetch the date data using logObj.dateId
//     const dateObj = await getSingleDate(logObj.dateId);
//     // Fetch the location data using logObj.locationId
//     const locationObj = await getSingleLocation(logObj.locationId);

//     // Combine all retrieved data and return
//     return { ...logObj, dateObj, locationObj };
//   } catch (error) {
//     // Handle errors
//     throw error;
//   }
// };

const deleteDatesLogs = (dateId) => new Promise((resolve, reject) => {
  getDatesLogs(dateId).then((logsArray) => {
    console.warn(logsArray, 'Date Logs');
    const deleteLogPromises = logsArray.map((log) => deleteSingleLog(log.firebaseKey));

    Promise.all(deleteLogPromises).then(() => {
      deleteSingleDate(dateId).then(resolve);
    });
  }).catch((error) => reject(error));
});

const deleteTruthLogs = (uid) => new Promise((resolve, reject) => {
  test3uid(uid).then((truthArray) => {
    console.warn(truthArray, 'truth Logs');
    const deleteTruthPromises = truthArray.map((truth) => test4fbk(truth.firebaseKey));

    Promise.all(deleteTruthPromises).then(() => {
      test4fbk(uid).then(resolve);
    });
  }).catch((error) => reject(error));
});

// const deleteLocationLogs = (locationId) => new Promise((resolve, reject) => {
//   getLocationslogs(locationId).then((logsArray) => {
//     console.warn(logsArray, 'Location Logs');
//     const deletelogPromises = logsArray.map((log) => deleteSingleLog(log.locationId));

//     Promise.all(deletelogPromises).then(() => {
//       deleteSingleLocation(locationId).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

const deleteLocationLogs = (locationId) => new Promise((resolve, reject) => {
  getLocationsLogs(locationId).then((logsArray) => {
    console.warn(logsArray, 'Location Logs');
    const deleteLogPromises = logsArray.map((log) => deleteSingleLog(log.firebaseKey));

    Promise.all(deleteLogPromises).then(() => {
      deleteSingleLocation(locationId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export {
  viewLogDetails, deleteDatesLogs, deleteLocationLogs, deleteTruthLogs,
};
