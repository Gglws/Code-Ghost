import React from "react";
import profilePic from "./images.jpg";

function Jeremy() {
  return (
    <div className="jeremyProfile">
      <div className="profileHeader"> Jeremy </div>
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

export default Jeremy;
