import React from "react";
import HeaderMenu from "./HeaderMenu.js";
import { motion } from "framer-motion";
import Form from "../Form.js";

function Header() {
  return (
    <div className="header">
      <motion.div
        className="title"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          {" "}
          superDevs
        </motion.div>
      </motion.div>
      <Form /> <HeaderMenu />
    </div>
  );
}

export default Header;
