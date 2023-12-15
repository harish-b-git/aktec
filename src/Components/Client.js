 
import React from "react";
import "./Client.css"
import TeamMember from "./TeamMember"; // Import the TeamMember component
import image1 from "./images/team-1.jpg";
import image2 from "./images/team-2.jpg";
import image3 from "./images/team-3.jpg";
import image4 from "./images/team-4.jpg";

function ClientComponent() {
  return (
    <div className="container">
      <h3>OUR <span>TEAM</span></h3>
      <div className="underline"></div>
      <div className="notes">
        <p>
          Magnam dolores commodi suscipit.Necessitatibus eius consequater ex
          aliquid fuga eum quidem.Sit sint consectutur velit.Quisquam quos
          quisquam cupiditate.Et nemo qui impedit suscipi alias ea.Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="cards">
        <TeamMember name="Walter White" role="Chief Executive Officer" imageSrc={image1} />
        <TeamMember name="Sarah Johnson" role="Product Manager" imageSrc={image2} />
        <TeamMember name="William Anderson" role="CTO" imageSrc={image3} />
        <TeamMember name="Amanda Jepson" role="Accountant" imageSrc={image4} />
      </div>
    </div>
  );
}

export default ClientComponent;
