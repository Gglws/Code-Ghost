import Form from "./Form.js";
import React from "react";
//IMPORT SECTION START
import Backend from "./testing_backend/Backend.js";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import "./styles.css";
import FormFooter from "./FormFooter.js";
import ProfileHighlights from "./ProfileHighlights.js";

//IMPORT SECTION END

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
      <header className="App-header"></header>
      <Header />
      <Intro />
      <ProfileHighlights />
      <FormFooter />
      <Backend />
    </div>
  );
}

export default App;
