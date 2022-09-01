//IMPORT SECTION START
import React from "react";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import "./styles.css";
import FormFooter from "./FormFooter.js";
import ProfileHighlights from "./ProfileHighlights.js";
import PlaceholderSqlBox from "./PlaceholderSqlBox.js";

import LoginForm from "./loginForm.js";


import { motion, useScroll } from "framer-motion";

// import Backend from "./testing_backend/Backend.js";
// import Footer_testing from "./testing_backend/Footer_testing.js";



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
      <LoginForm />
      <div className="innerApp">
        <Intro scroll={scrollYProgress}/>
        <ProfileHighlights />
        <PlaceholderSqlBox />
      </div>
      <FormFooter />
      {/* <Backend /> */}
      {/* <Footer_testing /> */}
    </div>
  );
}

export default App;
