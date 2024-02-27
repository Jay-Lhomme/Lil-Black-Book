import { FloatingLabel, Button, Form } from 'react-bootstrap';
import { React, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createLocation, updateLocation } from '../../api/locationData';

const initialState = {
  name: '',
  address: '',
  notes: '',
  count: '',
};

function LocationForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        address: obj.address,
        notes: obj.notes,
        count: obj.count,
        uid: obj.uid,
        firebaseKey: obj.firebaseKey,
      });
    }
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateLocation(formInput).then(() => router.push(`/locations/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createLocation(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLocation(patchPayload).then(() => {
          router.push('/locations');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Location</h2>

      {/* {NAME INPUT} */}
      <FloatingLabel
        controlId="floatingInput1"
        label="Name*"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* {ADDRESS INPUT} */}
      <FloatingLabel
        controlId="floatingInput2"
        label="Address*"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Enter Address"
          name="address"
          value={formInput.address}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* {NOTES INPUT} */}
      <FloatingLabel
        aria-label="With textarea"
        controlId="floatingInput3"
        label="Notes"
        className="mb-3"
      >
        <Form.Control
          type="textarea"
          placeholder="Enter Notes"
          name="notes"
          value={formInput.notes}
          onChange={handleChange}
        />
      </FloatingLabel>

      {/* {COUNT INPUT} */}
      <FloatingLabel
        controlId="floatingInput4"
        label="Visits"
        className="mb-3"
      >
        <Form.Control
          type="number"
          placeholder="Visits"
          name="count"
          value={formInput.count}
          onChange={handleChange}
        />
      </FloatingLabel>

      {/* {SUBMIT BUTTON} */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Location</Button>
    </Form>
  );
}

LocationForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    notes: PropTypes.string,
    count: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

LocationForm.defaultProps = {
  obj: initialState,
};

export default LocationForm;
