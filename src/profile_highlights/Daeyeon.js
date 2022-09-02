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
  const [scroller, setScroller] = useState(0);

  let count = 0;
  let count1 = 1;
  let count2 = 1;
  let count3 = 100;
  let tracker = 0;

  useEffect(() => {
    props.scroll.onChange(() => {
      count++;

      //change to use scroll y progress
      if (props.scroll.get() > tracker) {
        count2 += 1;
      } else if (props.scroll.get() < tracker) {
        count2 -= 1;
      }

      $(".daeyeonProfile").css({
        "background-image": `linear-gradient(30deg,#214079 1%, #663a7e ${count2}%, #a82b7d 100%)`,
      });

      tracker = props.scroll.get();
      setScroller(count);
    });
  }, [props.scroll, count]);
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
