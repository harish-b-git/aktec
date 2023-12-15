import React from 'react';

const MyCard = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default MyCard;
