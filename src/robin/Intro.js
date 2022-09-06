import { React, useEffect, useState } from "react";
import leon from "./leon.png";
import link from "./link.png";
import snake from "./snake.png";
import shadow from "./shadow.png";
import $ from "jquery";

import { motion } from "framer-motion";
import CG from "./CG.PNG";

function Intro(props) {
  const [scroller, setScroller] = useState(1);

  let menuHidden = false;

  useEffect(
    () =>
      props.scroll.onChange(() => {
        if (props.scroll.get() > 0 && menuHidden === false) {
          $(".header").animate({ top: "0" }, "slow");
          menuHidden = true;
        } else if (props.scroll.get() === 0 && menuHidden === true) {
          $(".header").animate({ top: "50px" }, "slow");
          menuHidden = false;
        }

        setScroller(props.scroll.get());
      }),
    []
  );
  // console.log(props.scroll.get());

  return (
    <motion.div
      className="introBox"
      style={{ opacity: 1 - props.scroll.get() * 2.5 }}
    >
      <div className="introImage">
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
      </div>
      <div className="introText">
        <div className="codeGhosts">&#123;codeGhosts&#125;</div>
        <div className="introCopy">
          <p>
            Meet the codeGhosts. We are Software Engineers and Military Veterans
            with coding skills so good
            <br /> ...it's spooky.
          </p>{" "}
          <p className="textMid"> Frontend. Backend. FullStack.</p>
          <p className="textEnd">
            You need it. We can do it... or we will binge read documentation and
            watch YouTube tutorials until we can.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
