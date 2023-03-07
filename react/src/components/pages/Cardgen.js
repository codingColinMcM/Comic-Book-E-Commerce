import React from 'react';

export default function Cardgen() {
  return (
    <div>
      <div class="card">
        <img src="({cover})})" alt="Comic Cover" style="width:100%">
        <div class="container">
        <h3>({title}), ({issue}), ({volume})</h3>
        <h3>({price})</h3>
      </div>
    </div>
  );
}
