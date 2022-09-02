import { React, useEffect, useState } from "react";
import leon from "./leon.png";
import link from "./link.png";
import snake from "./snake.png";
import shadow from "./shadow.png";
import { motion, useScroll } from "framer-motion";

function Intro(props) {
  const [scroller, setScroller] = useState(1);
  useEffect(
    () =>
      props.scroll.onChange(() => {
        let value = 1 - props.scroll.get() * 10;
        setScroller(value);
      }),
    []
  );
  // console.log(props.scroll.get());

  return (
    <div className="introBox">
      <motion.div
        style={{ opacity: 1 - props.scroll.get() * 10 }}
        className="introImage"
      >
        <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <img className="image" src={leon} alt="leon" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1 }}
        >
          <img className="image" src={link} alt="link" />{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <img className="image" src={snake} alt="snake" />{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 2 }}
        >
          <img className="image" src={shadow} alt="shadow" />{" "}
        </motion.div>
      </motion.div>
      <div className="introText"> Intro Text Here</div>
    </div>
  );
}

export default Intro;
