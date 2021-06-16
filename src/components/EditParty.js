import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function EditParty(props) {
  const [inputValues, setInputValues] = useState({
    id: '',
    name: '',
    city: '',
    address: '',
  });

  useEffect(() => {
    getPartyDetails();
  }, []);

  const getPartyDetails = () => {
    let partyId = props.match.params.id;
    axios
      .get(`http://localhost:3000/parties/${partyId}`)
      .then(res => {
        setInputValues({
          id: res.data.id,
          name: res.data.name,
          city: res.data.city,
          address: res.data.address,
        });
      })
      .catch(err => console.log(err));
  };

  const EditParty = inputValues => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:3000/parties/${inputValues.id}`,
        data: inputValues,
      })
      .then(res => {
        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]: value});
  };

  const handleSubmit = e => {
    EditParty(inputValues);
    e.preventDefault();
  };

  return (
    <div>
      <br />
      <Link className="btn grey" to="/">
        Back
      </Link>
      <h1>Edit Party</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="city"
            value={inputValues.city}
            onChange={handleInputChange}
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="address"
            value={inputValues.address}
            onChange={handleInputChange}
          />
          <label htmlFor="address">Address</label>
        </div>
        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
}

export default EditParty;
