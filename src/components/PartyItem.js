import React from 'react';
import {Link} from 'react-router-dom';

function PartyItem({item}) {
  return (
    <li className="collection-item">
      <Link to={`/parties/${item.id}`}>{item.name}</Link>
    </li>
  );
}

export default PartyItem;
