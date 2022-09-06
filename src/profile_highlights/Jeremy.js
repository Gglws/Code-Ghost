import React from "react";
import hJeremy from "../robin/hJeremy.PNG";

function Jeremy() {

  return (
    <div className="jeremyProfile">
      <div className="profileHeader"> Jeremy  - 4 years U.S. Air Force</div>
      <div className="profileUH">
      <img
        src={hJeremy}
        className="hJeremy"
        alt="Profile Pic"
        width="500"
        height="500"
      />
  <div className="profileContent">
    Backend Barbarian
    <div className="profileText">
    Jeremy is the bomb.
    </div>
  </div>
    </div>
    </div>
  );

}

export default Jeremy;
