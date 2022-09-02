import React from "react";
import HeaderMenu from "./HeaderMenu.js";
import { motion } from "framer-motion";
// import Form from "../Form.js";
import CG from './CG.PNG'

function Header() {
  return (
    <div className="header">
      <motion.div
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <img className="CG" src={CG} alt="CG" />
      </motion.div>
      {/* <motion.div
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
        ></motion.div>
      </motion.div> */}
      <HeaderMenu />
    </div>
  );
}

export default Header;
