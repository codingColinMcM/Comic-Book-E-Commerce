import React from 'react';

export default function Cardspec() {
  return (
    <div>
      <div class="card">
        <h2>({title})</h2>
        <h3>({issue}), ({volume})</h3>
        <img src="({cover})})" alt="Comic Cover" style="width:100%">
        <div class="container">
        <h>Author: ({author})</h3>
        <h>Artist: ({artist})</h3>
        <h>Price: ({price})</h3>
      </div>
    </div>
  );
}
