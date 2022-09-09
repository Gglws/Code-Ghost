import { React, useEffect, useState } from "react";

import gRobin from "../assets//gRobin.PNG";
import gDaeyeon from "../assets/gDaeyeon.PNG";
import gJeremy from "../assets/gJeremy.PNG";
import gGage from "../assets/gGage.PNG";

import $ from "jquery";

import { motion } from "framer-motion";

function Intro(props) {
  const [scroller, setScroller] = useState(1);

  let menuHidden = false;

  useEffect(
    () =>
      props.scroll.onChange(() => {
        if (props.scroll.get() > 0 && menuHidden === false) {
          $(".header").animate({ top: "0" }, "fast");
          menuHidden = true;
        } else if (props.scroll.get() === 0 && menuHidden === true) {
          $(".header").animate({ top: "40px" }, "fast");
          menuHidden = false;
        }

        setScroller(props.scroll.get());
      }),
    []
  );

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
          <img className="image gRobin" src={gRobin} alt="gRobin" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1 }}
        >
          <img className="image gDaeyeon" src={gDaeyeon} alt="gDaeyeon" />{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <img className="image gJeremy" src={gJeremy} alt="gJeremy" />{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 2 }}
        >
          <img className="image gGage" src={gGage} alt="gGage" />{" "}
        </motion.div>
      </div>
      <div className="introText">
        <p className="textMid introCopy"> Frontend. Backend. FullStack.</p>
        <div className="codeGhosts">&#123;codeGhosts&#125;</div>
        <div className="introCopy">
          <p>
            Meet the codeGhosts. We are Software Engineers and Military Veterans
            with coding skills so good... it's spooky. You need it. We can do
            it... or we will binge read documentation and watch YouTube
            tutorials until we can.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
