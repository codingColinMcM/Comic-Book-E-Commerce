import React from 'react';
import Cardgen from './Cardgen'

export default function Home() {
  return (
    <div>
      <h2>Randomly Selected Comics</h2>
      <Cardgen />
      <Cardgen />
      <Cardgen />
      <Cardgen />
      <Cardgen />
      <Cardgen />
    </div>
  );
}


//Would like for home to display 9 random cards, or have a scrolling feature