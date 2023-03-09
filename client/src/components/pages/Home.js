import React from 'react';
import Cardgen from './Cardgen'

export default function Home() {
  return (
    <div className='container'>
      <h2>Randomly Selected Comics</h2>
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


//Would like for home to display 9 random cards, or have a scrolling feature