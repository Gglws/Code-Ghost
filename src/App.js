//IMPORT SECTION START
import React from "react";
import Backend from "./testing_backend/Backend.js";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import "./styles.css";
import FormFooter from "./FormFooter.js";
import ProfileHighlights from "./ProfileHighlights.js";
import PlaceholderSqlBox from "./PlaceholderSqlBox.js";
import { motion, useScroll } from "framer-motion";
//IMPORT SECTION END

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <div className="innerApp">
        <Intro />
        <ProfileHighlights />
        <PlaceholderSqlBox />
      </div>
      <FormFooter />
      <Backend />
    </div>
  );
}

export default App;
