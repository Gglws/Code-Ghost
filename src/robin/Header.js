import React from 'react'
import HeaderMenu from './HeaderMenu'
import { motion } from "framer-motion"

function Header() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: [1] }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75 }}
      className="header"
    >  <HeaderMenu />
    </motion.div>
  );
}

export default Header;