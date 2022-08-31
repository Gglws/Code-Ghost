
//IMPORT SECTION START
import React from "react";
import Backend from "./testing_backend/Backend.js";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import Daeyeon from "./robin/profile highlights/Daeyeon.js";
import Gage from "./robin/profile highlights/Gage.js";
import Jeremy from "./robin/profile highlights/Jeremy.js";
import Robin from "./robin/profile highlights/Robin.js";
import "./styles.css";
import FormFooter from "./FormFooter.js";
import PlaceholderSqlBox from "./PlaceholderSqlBox.js";
//IMPORT SECTION END

function App() {
  return (
    <div className="App">
      <Header />
      <div className="innerApp">
      <Intro />
      <Daeyeon />
      <Gage />
      <Jeremy />
      <Robin />
      <PlaceholderSqlBox />
      </div>
      <FormFooter />
      <Backend />
    </div>
  );
}

export default App;
