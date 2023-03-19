import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_Offer } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SkillForm = ({ profileId }) => {
  const [Offer, setOffer] = useState('');

  const [addOffer, { error }] = useMutation(ADD_Offer);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addOffer({
        variables: { profileId, Offer },
      });

      setOffer('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4> Comment on these offers</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some skills..."
              value={Offer}
              className="form-input w-100"
              onChange={(event) => setOffer(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse Skill
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse skills. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SkillForm;
