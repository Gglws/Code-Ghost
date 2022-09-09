import { React, useEffect, useState } from "react";
import hDaeyeon from "../assets/hDaeyeon.PNG";
import $ from "jquery";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function Daeyeon(props) {
  const [scroller, setScroller] = useState(1);

  useEffect(() =>
    props.scroll.onChange(() => {
      setScroller(props.scroll.get());
      $(".daeyeonProfile").css({
        "background-image": `linear-gradient(30deg,#214079 1%, #663a7e ${
          props.scroll.get() * 200
        }%, #a82b7d 100%)`,
      });
    }, [])
  );

  return (
    <motion.div className="daeyeonProfile">
      <div className="profileHeader jHeader"> Daeyeon - 4 years U.S. Army</div>
      <div className="profileUH">
        <img
          src={hDaeyeon}
          className="profilePicture"
          alt="Profile Pic"
          width="500"
          height="500"
        />
        <div className="profileContent">
          Precision
          <br />
          and Agility
        </div>
      </div>
    </motion.div>
  );
}

export default Daeyeon;
