import React from 'react'
import HeaderMenu from './HeaderMenu.js'
import { motion } from "framer-motion"
import Form from "../Form.js";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
      className="header"
    >
      superDevs <Form className="login" /> <HeaderMenu className="headerMenu" />
    </motion.div>
  );
}

export default Header;