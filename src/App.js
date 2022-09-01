//IMPORT SECTION START
import React from "react";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import "./styles.css";
import FormFooter from "./FormFooter.js";
import ProfileHighlights from "./ProfileHighlights.js";
import PlaceholderSqlBox from "./PlaceholderSqlBox.js";
import LoginForm from "./loginForm.js";
// import Backend from "./testing_backend/Backend.js";
// import Footer_testing from "./testing_backend/Footer_testing.js";

//IMPORT SECTION END

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <div className="innerApp">
        <Intro />
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
