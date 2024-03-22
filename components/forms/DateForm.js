import {
  FloatingLabel, Button, Form,
} from 'react-bootstrap';
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useAuth } from '../../utils/context/authContext';
import { updateDate, createDate } from '../../api/dateData';

const initialState = {
  name: '',
  image: '',
  age: '',
  gender: '',
  orientation: '',
  relation: '',
  email: '',
  notes: '',
  flag: '',
  count: '',
  active: '',
};

function DateForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const updatedValue = e.target.type === 'checkbox' ? checked : value;
    setFormInput((prevState) => {
      if (name === 'flag' && updatedValue === 4) {
        return {
          ...prevState,
          [name]: updatedValue,
          active: false,
        };
      }
      return {
        ...prevState,
        [name]: updatedValue,
      };

      // setFormInput((prevState) => ({
      //   ...prevState,
      //   [name]: updatedValue,
      // }));
    });
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        image: obj.image,
        age: obj.age,
        gender: obj.gender,
        orientation: obj.orientation,
        relation: obj.relation,
        email: obj.email,
        notes: obj.notes,
        count: obj.count,
        flag: obj.flag,
        active: obj.active,
        uid: obj.uid,
        firebaseKey: obj.firebaseKey,
      });
    }
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((formInput.flag) === 4 && (formInput.active) === true) {
      setFormInput((prevState) => ({
        ...prevState,
        active: false,
      }));
    }

    if (obj.firebaseKey) {
      updateDate(formInput).then(() => router.push(`/dates/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createDate(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateDate(patchPayload).then(() => {
          router.push('/dates');
        });
      });
    }
  };

  return (
    <div className="containerF">
      <div className="form_areaF">
        <h2 className="titleF">{obj.firebaseKey ? 'Update' : 'Create'} Date</h2>
        <Form action="" onSubmit={handleSubmit}>
          <div className="form_groupF">

            {/* {NAME INPUT} */}
            <FloatingLabel
              controlId="floatingInput1"
              label="Name*"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formInput.name}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* {IMAGE INPUT} */}
            <FloatingLabel
              controlId="floatingInput3"
              label="Photo"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="url"
                placeholder="Enter a Url"
                name="image"
                value={formInput.image}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* {AGE INPUT} */}
            <FloatingLabel
              controlId="floatingInput2"
              label="Age"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="number"
                placeholder="Enter an Age"
                min="18"
                max="99"
                name="age"
                value={formInput.age}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {GENDER SELECT} */}
            <FloatingLabel
              controlId="floatingInput4"
              label="Gender*"
              className="sub_titleF"
            >
              <Form.Select
                className="form_styleF"
                type="text"
                placeholder="Enter Gender"
                name="gender"
                onChange={handleChange}
                value={formInput.gender}
                required
              >
                <option value="">Select a Gender</option>
                <option value="FEMALE">FEMALE</option>,
                <option value="MALE">MALE</option>,
                <option value="NONBINARY">NOBINARY</option>,
                <option value="TRANSGENDER">TRANSGENDER</option>
                <option value="N/A">N/A</option>
              </Form.Select>
            </FloatingLabel>

            {/* {ORIENTATION SELECT} */}
            <FloatingLabel
              controlId="floatingInput5"
              label="Orientation*"
              className="sub_titleF"
            >
              <Form.Select
                className="form_styleF"
                type="text"
                placeholder="Enter an Orientation"
                name="orientation"
                onChange={handleChange}
                value={formInput.orientation}
                required
              >
                <option value="">Select an Orientation</option>
                <option value="ASEXUAL">ASEXUAL</option>,
                <option value="BISEXUAL">BISEXUAL</option>,
                <option value="HETEROSEXUAL">HETEROSEXUAL</option>,
                <option value="HOMOSEXUAL">HOMOSEXUAL</option>,
                <option value="PANSEXUAL">PANSEXUAL</option>,
                <option value="N/A">N/A</option>
              </Form.Select>
            </FloatingLabel>

            {/* {RELATION SELECT} */}
            <FloatingLabel
              className="sub_titleF"
              controlId="floatingInput6"
              label="Relation*"
            >
              <Form.Select
                className="form_styleF"
                aria-label="Relation"
                name="relation"
                value={formInput.relation}
                onChange={handleChange}
                required
              >
                <option value="">Select a Relation Type</option>
                <option value="CLIENT">CLIENT</option>,
                <option value="DATE">DATE</option>,
                <option value="FRIEND">FRIEND</option>,
                <option value="FWB">FWB</option>,
                <option value="MISTER/MISSTRESS">MISTER/MISSTRESS</option>
                <option value="STRANGER">STRANGER</option>
                <option value="N/A">N/A</option>
              </Form.Select>
            </FloatingLabel>

            {/* {NUMBER INPUT} */}
            <FloatingLabel
              controlId="floatingInput7"
              label="Number"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="number"
                placeholder="##########"
                name="number"
                min="0000000000"
                max="9999999999"
                value={formInput.number}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {EMAIL INPUT} */}
            <FloatingLabel
              controlId="floatingInput8"
              label="Email"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="email"
                placeholder="Enter an Email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {NOTES INPUT} */}
            <FloatingLabel
              controlId="floatingInput9"
              label="Notes"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="textarea"
                placeholder="Enter Notes"
                name="notes"
                value={formInput.notes}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {FLAG INPUT} */}
            <FloatingLabel
              controlId="floatingInput10"
              label="RED FLAGS"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="number"
                placeholder="How Many Red Flags"
                min="0"
                max="4"
                name="flag"
                value={formInput.flag}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {COUNT INPUT} */}
            <FloatingLabel
              controlId="floatingInput11"
              label="Date Count"
              className="sub_titleF"
            >
              <Form.Control
                className="form_styleF"
                type="number"
                placeholder=""
                min="0"
                max="8"
                name="count"
                value={formInput.count}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {ACTIVE INPUT} */}
            <FloatingLabel
              controlId="floatingInput12"
              label="Active"
              className="sub_titleF"
            >

              <Form.Check
                className="form_styleF"
                type="switch"
                id="custom-switch"
                name="active"
                checked={formInput.active}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* {SUBMIT BUTTON} */}
            <Button className="btnF" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Date</Button>
          </div>
        </Form>
      </div>
    </div>

  );
}

DateForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    relation: PropTypes.string,
    number: PropTypes.number,
    email: PropTypes.string,
    notes: PropTypes.string,
    flag: PropTypes.string,
    count: PropTypes.string,
    active: PropTypes.bool,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

DateForm.defaultProps = {
  obj: initialState,
};

export default DateForm;
