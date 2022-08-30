//IMPORT SECTION START
import Backend from "./testing_backend/Backend.js";
import Header from "./robin/Header.js";
import Intro from "./robin/Intro.js";
import Daeyeon from "./robin/profile highlights/Daeyeon.js";
import Gage from "./robin/profile highlights/Gage.js";
import Jeremy from "./robin/profile highlights/Jeremy.js";
import Robin from "./robin/profile highlights/Robin.js";
import "./app.css";
import FormFooter from "./FormFooter.js";
//IMPORT SECTION END

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header />
      <Intro />
      <Daeyeon />
      <Gage />
      <Jeremy />
      <Robin />
      <FormFooter />
      <Backend />
    </div>
  );
}

export default App;
