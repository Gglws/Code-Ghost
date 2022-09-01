//IMPORT SECTION START
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import React from "react";
import "./styles.css";

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>

    // <div className="App">
    //   <motion.div
    //     className="progress-bar"
    //     style={{ scaleX: scrollYProgress }}
    //   />
    //   <Header />
    //   <LoginForm />
    //   <div className="innerApp">
    //     <Intro scroll={scrollYProgress}/>
    //     <ProfileHighlights />
    //     <PlaceholderSqlBox />
    //   </div>
    //   <FormFooter />
    //   {/* <Backend /> */}
    //   {/* <Footer_testing /> */}
    // </div>

  );
}

export default App;
