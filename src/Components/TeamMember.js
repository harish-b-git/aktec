 
import React from "react";

const TeamMember = ({ name, role, imageSrc }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageSrc} alt="Not Found" />
      <div className="card-header">
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};



export default TeamMember;
