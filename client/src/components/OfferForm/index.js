import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_Offer } from '../../utils/mutations';
import Auth from '../../utils/auth';


const OfferForm = () => {
  const [offerFormData, setOfferFormData] = useState({ name: '', description: '' });
  const [characterCount, setCharacterCount] = useState(0);

  const [addOffer, { error }] = useMutation(ADD_Offer);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addOffer({
        variables: { ...offerFormData },
      });

      Auth.login(data.addOffer.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      console.log(handleChange)
    if (name === 'offerText' && value.length <= 280) {
      setOfferFormData({ ...offerFormData, [name]: value });
      setCharacterCount(value.length);
    } else if (name === 'offerText') {
      setCharacterCount(280);
    } else {
      setOfferFormData({ ...offerFormData, [name]: value });
    }
  };

  return (
    <div>
      <Link to="/offers">← Go to Offers</Link>

      <h2>Offer a Service</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="offerName">Offer Name:</label>
          <input
            placeholder="Offer Name"
            name="offerName"
            type="offerName"
            id="offerName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="offerDescription">Offer Description:</label>
          <input
            placeholder="Offer Description"
            name="offerDescription"
            type="offerDescription"
            id="offerDescription"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}


export default OfferForm;
