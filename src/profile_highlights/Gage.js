import React from "react";
import hGage from "../assets/hGage.PNG";

function Gage() {
  return (
    <div className="gageProfile">
      <div className="backgroundGif"></div>
      <div className="profileHeader rHeader"> Gage - 8 years U.S Air Force</div>
      <div className="profileUH">
        <div className="profileContent gPC">
          Intelligence <br /> and Equilibrium
        </div>
        <img
          src={hGage}
          className="hJeremy"
          alt="Profile Pic"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}

export default Gage;
