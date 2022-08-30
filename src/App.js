

//IMPORT SECTION START
import Backend from "./testing_backend/Backend.js";
import Header from "./robin/Header";
import Intro from "./robin/Intro";
import Daeyeon from "./robin/profile highlights/Daeyeon";
import Gage from "./robin/profile highlights/Gage";
import Jeremy from "./robin/profile highlights/Jeremy";
import Robin from "./robin/profile highlights/Robin";
//IMPORT SECTION END

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
          <Header/>
          <Intro/>
          <Daeyeon/>
          <Gage/>
          <Jeremy/>
          <Robin/>
        <Backend />
    </div>
  );
}

export default App;
