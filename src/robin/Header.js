import React from "react";
// import HeaderMenu from "./HeaderMenu.js";
import { motion } from "framer-motion";
// import Form from "../Form.js";
import CT from './CT.PNG'

function Header() {
  return (
    <div className="header">
      <motion.div
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <img className="CT" src={CT} alt="CT" />
      </motion.div>
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          whileHover={{ scale: [null, 1.3, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          Code Ghosts
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
