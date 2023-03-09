import React from 'react';
import Cardgen from './Cardgen'

export default function Browse() {
  return (
    <div className='container'>
      <h2>Browse Comics</h2>
      <div className="space">
        <Cardgen />
      </div>
      <div className="space">
        <Cardgen />
      </div>
      <div className="space">
        <Cardgen />
      </div>
      <div className="space">
        <Cardgen />
      </div>
      <div className="space">
        <Cardgen />
      </div>
    </div>
  );
}


//Would like to display random comics, some sort of search function.