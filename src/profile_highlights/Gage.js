import React from "react";
import profilePic from "./images.jpg";

function Gage() {
  return (
    <div className="profile">
      <div className="profileHeader"> Gage </div>
      <div className="profileContent">Blah blah blah blah blah blah</div>
      <img
        src={profilePic}
        className="profilePicture"
        alt="Profile Pic"
        width="500"
        height="500"
      />
    </div>
  );
}

export default Gage;
