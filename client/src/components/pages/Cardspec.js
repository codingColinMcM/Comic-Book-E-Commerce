import React from 'react';

export default function Cardspec() {
  return (
    <div>
      <div class="card">
        <h2>({title})</h2>
        <h3>({issue}), ({volume})</h3>
        <img src="({cover})})" alt="Comic Cover" style="width:100%"/>
        <div class="container">
        <h3>Author: ({author})</h3>
        <h3>Artist: ({artist})</h3>
        <h3>Price: ({price})</h3>
        </div>
      </div>
    </div>
  );
}
