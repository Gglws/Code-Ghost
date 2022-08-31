import React, { useState } from "react";
import $ from "jquery";
import Daeyeon from "./profile_highlights/Daeyeon.js";
import Gage from "./profile_highlights/Gage.js";
import Jeremy from "./profile_highlights/Jeremy.js";
import Robin from "./profile_highlights/Robin.js";

const ProfileHighlights = () => {
  return (
    <div className="profileContainer">
      <Daeyeon />
      <Gage />
      <Jeremy />
      <Robin />
    </div>
  );
};

export default ProfileHighlights;
