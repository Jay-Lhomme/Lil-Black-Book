import { FloatingLabel, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createLog, updateLog } from '../../api/logData';
import { getLocations } from '../../api/locationData';
import { getDates } from '../../api/dateData';

const initialState = {
  day: '',
  dateId: '',
  locationId: '',
  notes: '',
  uid: '',
};

function LogForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);

  const [dates, setDates] = useState([]);
  const [locations, setLocations] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getDates(user.uid).then(setDates);
    getLocations(user.uid).then(setLocations);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateLog(formInput).then(() => router.push(`/logs/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createLog(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLog(patchPayload).then(() => {
          router.push('/logs');
        });
      });
    }
  };

  return (
    <div className="containerF">
      <div className="form_areaF">
        <h2 className="titleF">{obj.firebaseKey ? 'Update' : 'Create'} Log</h2>
        <Form action="" onSubmit={handleSubmit}>
          <div className="form_groupF">

            {/* {DAY INPUT} */}
            <FloatingLabel
              controlId="floatingInput1"
              label="Day of Date"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="date"
                placeholder="Day of Date"
                name="day"
                value={formInput.day}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* {PERSON SELECT} */}
            <FloatingLabel className="sub_titleF" controlId="floatingSelect1" label="Person">
              <Form.Select
                aria-label="Person"
                name="dateId"
                className="form_styleF"
                value={formInput.dateId}
                onChange={handleChange}
                required
              >
                <option value="">Select a Person</option>
                {
            dates.map((date) => (
              <option
                key={date.firebaseKey}
                value={date.name}
              >
                {date.name}
              </option>
            ))
          }
              </Form.Select>
            </FloatingLabel>

            {/* {LOCATION SELECT} */}
            <FloatingLabel className="sub_titleF" controlId="floatingSelect2" label="Location">
              <Form.Select
                aria-label="Location"
                name="locationId"
                className="form_styleF"
                value={formInput.locationId}
                onChange={handleChange}
                required
              >
                <option value="">Select a Location</option>
                {
            locations.map((location) => (
              <option
                key={location.firebaseKey}
                value={location.name}
              >
                {location.name}
              </option>
            ))
          }
              </Form.Select>
            </FloatingLabel>

            {/* {NOTES INPUT} */}
            <FloatingLabel
              controlId="floatingInput2"
              label="Notes"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="text"
                placeholder="Enter Notes"
                name="notes"
                value={formInput.notes}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* {SUBMIT BUTTON} */}
            <Button className="btnF" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Log</Button>
          </div>
        </Form>
      </div>
    </div>

  );
}

LogForm.propTypes = {
  obj: PropTypes.shape({
    day: PropTypes.string,
    dateId: PropTypes.string,
    locationId: PropTypes.string,
    notes: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

LogForm.defaultProps = {
  obj: initialState,
};

export default LogForm;
