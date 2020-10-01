import React from 'react';

const data = {
  heading: 'Adresse',
  name: 'Glowspace',
  address: 'Porcelænshaven 26',
  postalNr: '2000 Fredriksberg',
  cvr: "CVR: 4115 9944"
};

const AddressBlock = props => {
  return (
    <div className="AddressBlock">
      <h2 className="AddressBlock__heading">{data.heading}</h2>
      <ul className="AddressBlock__list">
        <li className="AddressBlock__listItem">{data.name}</li>
        <li className="AddressBlock__listItem">{data.address}</li>
        <li className="AddressBlock__listItem">{data.postalNr}</li>
        <li className="AddressBlock__listItem">{data.cvr}</li>
      </ul>
    </div>
  );
};

export default AddressBlock;