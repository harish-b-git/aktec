import React, { useState } from 'react';
import './CardSlider.css'; // Import your CSS file for styling

const CardSlider = ({ data }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-slider">
      <button onClick={handlePrev}>&lt;</button>
      <div className="card-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`card ${index === currentCardIndex ? 'active' : ''}`}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default CardSlider;
