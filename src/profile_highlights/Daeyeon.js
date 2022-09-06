import { React, useEffect, useState } from "react";
import profilePic from "./images.jpg";
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

  useEffect(
    () =>
      props.scroll.onChange(() => {
        setScroller(props.scroll.get());
      $(".daeyeonProfile").css({
        "background-image": `linear-gradient(30deg,#214079 1%, #663a7e ${props.scroll.get()*200}%, #a82b7d 100%)`,
      
    });
  }, []));
  // props.scroll.onChange(() => {
  //   count++;

  //   // console.log(props.scroll);
  //   // $(".profile").css({
  //   //   "background-image": "linear-gradient(30, rgba(255, 255, 255)",
  //   // });
  //   // $(".profile").css({ height: `${newCount}` });

  //   // console.log(count);
  // });

  return (
    <motion.div className="daeyeonProfile">
      <div className="profileHeader"> Daeyeon </div>
      <div className="profileContent">Blah blah blah blah blah blah</div>
      <img
        src={profilePic}
        className="profilePicture"
        alt="Profile Pic"
        width="500"
        height="500"
      />
    </motion.div>
  );
}

export default Daeyeon;
