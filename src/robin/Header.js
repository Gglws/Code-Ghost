import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CG from "../assets/CG.PNG";

function Header() {
  return (
    <div className="header">
      <motion.div
        whileHover={{ scale: [null, 1.3, 1.2] }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/">
          <img className="CG" src={CG} alt="CG" />
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
