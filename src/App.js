//IMPORT SECTION START
//Routes start
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
//Routes end
import React from "react";
import "./styles.css";
//IMPORT SECTION END

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
  );
}
//   return (
//     <div className="App">
//       <motion.div
//         className="progress-bar"
//         style={{ scaleX: scrollYProgress }}
//       />
//       <Header />
//       <div className="innerApp">
//         <Intro />
//         <ProfileHighlights />
//         <PlaceholderSqlBox />
//       </div>
//       <FormFooter />
//       {/* <Backend /> */}
//       {/* <Footer_testing /> */}
//     </div>
//   );
// }
export default App;
