import React from 'react'
import leon from "./leon.png"
import link from "./link.png"
import snake from "./snake.png"
import shadow from "./shadow.png"

function Intro() {
  return (
    <div className="introBox">
      <div className="introImage">
        <img className="image" src={leon} alt="leon" />
        <img className="image" src={link} alt="link" />
        <img className="image" src={snake} alt="snake" />
        <img className="image" src={shadow} alt="shadow" />
      </div>
        <div className="introText"> Intro Text Here</div>
    </div>
  );
}

export default Intro