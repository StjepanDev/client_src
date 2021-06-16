import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PartyItem from './PartyItem';

function Parties() {
  useEffect(() => {
    getParties();
  }, []);

  const [parties, setParties] = useState([]);

  const getParties = () => {
    axios
      .get('http://localhost:3000/parties')
      .then(res => {
        setParties(res.data);
      })
      .catch(err => console.log(err));
  };

  const partyItems = parties.map(party => {
    return <PartyItem key={party.id} item={party} />;
  });

  return (
    <div>
      <ul className="collection">{partyItems}</ul>
    </div>
  );
}

export default Parties;
