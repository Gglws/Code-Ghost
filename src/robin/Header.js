import React from "react";

// import HeaderMenu from "./HeaderMenu.js";
import { motion } from "framer-motion";
// import Form from "../Form.js";
import CG from "./CG.PNG";


function Header() {
  return (
    <div className="header">
      <motion.div
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <img className="CG" src={CG} alt="CG" />
      </motion.div>
    </div>
  );
}

export default Header;
