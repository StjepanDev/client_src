import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function PartyDetails(props) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    let partyId = props.match.params.id;
    console.log(partyId);
    axios
      .get(`http://localhost:3000/parties/${partyId}`)
      .then(response => {
        setDetails(response.data);
        console.log(details);
      })
      .catch(err => console.log(err));
  };

  const deleteHandle = () => {
    let partyId = details.id;
    axios
      .delete(`http://localhost:3000/parties/${partyId}`)
      .then(response => {
        console.log(response);

        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <br />
      <Link className="btn grey" to="/">
        Back
      </Link>
      <h1>{details.name}</h1>
      <ul className="collection">
        <li className="collection-item">City: {details.city}</li>
        <li className="collection-item">Address: {details.address}</li>
      </ul>
      <Link className="btn" to={`/parties/edit/${details.id}`}>
        {' '}
        Edit
      </Link>

      <button onClick={deleteHandle} className="btn red right">
        Delete
      </button>
    </div>
  );
}

export default PartyDetails;
