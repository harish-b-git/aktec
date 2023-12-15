// App.js
import React from 'react';
import CardSlider from './CardSlider';

const cardData = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
  { title: 'Card 4', description: 'Description for Card 4' },
  { title: 'Card 5', description: 'Description for Card 5' },
  

  // Add more card data as needed
];

function Cards() {
  return (
    <div className="App">
      <h1>React Card Slider</h1>
      <CardSlider data={cardData} />
    </div>
  );
}

export default Cards;
