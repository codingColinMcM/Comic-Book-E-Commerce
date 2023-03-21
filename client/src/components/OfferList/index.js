import React from 'react';

const OfferList = ({ offers }) => {
  return (
    <div>
      <h2>Offers from Different Profiles</h2>
      {offers.length > 0 ? (
        <ul>
          {offers.map((offer, index) => (
            <li key={index}>
              <h3>{offer.userNameID}</h3>
              <p>{offer.textbody}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default OfferList;
