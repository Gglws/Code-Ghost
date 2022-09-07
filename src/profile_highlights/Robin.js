import { React, useRef } from "react";
import hRobin from "../robin/hRobin.PNG";
import { motion, useInView } from "framer-motion";
import $ from "jquery";

function Robin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}
      className="robinProfile"
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "1s",
      }}
    >
      <div className="profileHeader rHeader"> Robin - 10 years U.S. Army</div>
      <div className="profileUH">
        <div className="profileContent rPC">
          Creativity and
          <br />
          Follow-Through
          {/* <div className="profileText">
            Robin brings a unique blend of military exprerience and an eye for
            visual design. He has led unit programs and managed variously sized
            teams. Additionally, Robin has used his creativity to lead company
            rebranding efforts that resulted in increased unit morale. He gets
            along with everyone and isn't afraid to give or recieve support.
          </div> */}
        </div>
        <img
          src={hRobin}
          className="profilePicture hRobin"
          alt="Profile Pic"
          width="500"
          height="500"
        />
      </div>
    </motion.div>
  );
}

export default Robin;
