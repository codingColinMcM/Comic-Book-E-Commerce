import React from 'react';

const SkillsList = ({ Offer }) => {
  if (!Offer.length) {
    return <h3>No Offers Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {Offer &&
          Offer.map((Offer) => (
            <div key={Offer} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {Offer} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsList;

