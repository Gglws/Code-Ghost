import { React, useState } from "react";
import hRobin from "../robin/hRobin.PNG";
import { motion } from "framer-motion";

function Robin(props) {


  return (
    <div className="robinProfile">
      <div className="profileHeader"> Robin  - 10 years U.S. Army</div>
      <div className="profileUH">
      <div className="profileContent">
        Visual Creativity and Leadership
        <div className="profileText">
        Robin brings a unique blend of military exprerience and an eye for visual design. He has led unit programs and managed variously sized teams. Additionally, Robin has used his creativity to lead company rebranding efforts that resulted in increased unit morale. He gets along with everyone and isn't afraid to give or recieve support.
        </div>
      </div>
      <img
        src={hRobin}
        className="profilePicture hRobin"
        alt="Profile Pic"
        width="500"
        height="500"
      /></div></div>
  );
}

export default Robin;