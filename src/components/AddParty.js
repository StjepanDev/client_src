import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function AddParty(props) {
  const [inputValues, setInputValues] = useState({
    name: '',
    city: '',
    address: '',
  });

  const AddParty = inputValues => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:3000/parties',
        data: inputValues,
      })
      .then(res => {
        console.log(res);

        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    AddParty(inputValues);
    e.preventDefault();
  };

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]: value});
  };

  return (
    <div>
      <br />
      <Link className="btn grey" to="/">
        Back
      </Link>
      <h1>Add Party</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            value={inputValues.name}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input
            onChange={handleInputChange}
            type="text"
            name="city"
            value={inputValues.city}
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="input-field">
          <input
            onChange={handleInputChange}
            type="text"
            name="address"
            value={inputValues.address}
          />
          <label htmlFor="address">Address</label>
        </div>
        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
}

export default AddParty;
