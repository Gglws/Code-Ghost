import {React, useRef} from "react";
import hJeremy from "../robin/hJeremy.PNG";
import {motion, useInView} from "framer-motion"


function Jeremy() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="jeremyProfile">
      <div className="profileHeader jHeader">
        {" "}
        Jeremy - 4 years U.S. Air Force
      </div>
      <div className="profileUH" ref={ref}>
        <img
          src={hJeremy}
          className="hJeremy"
          alt="Profile Pic"
          width="500"
          height="500"
        />
        <motion.div 
          className="profileContent"
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
        >
          Versatility
          <br />
          <span className="jPC">and Tenacity</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Jeremy;
