import React from "react";
import daeyeon from "./assets/daeyeon_linkedin.jpg";
import gage from "./assets/gage_linkedin.jpg";
import jeremy from "./assets/jeremy_linkedin.jpg";
import robin from "./assets/robin_linkedin.jpg";

function PlaceholderSqlBox() {
  return (
    <div className="sqlBox">
      <div className="sqlBoxTitle">
        <h2 className="sqlBoxTitleText">
          Which software developer is right for you?
        </h2>
      </div>
      <div className="sqlSubBoxContainer">
        <div className="sqlSubBox">
          <img src={daeyeon} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Daeyeon Cho</h3>
          <p className="bulletPoint">JavaScript (ES5/ES6)</p>
          <p className="bulletPoint">JQuery</p>
          <p className="bulletPoint">HTML5/CSS</p>
          <p className="bulletPoint">Express</p>
          <p className="bulletPoint">PostgresSQL</p>
          <p className="bulletPoint">Node.js</p>
          <p className="bulletPoint">React</p>
          <p className="bulletPoint">Git</p>
          <p className="bulletPoint">RESTful API</p>
          <p className="bulletPoint">Heroku/Render Deployment</p>
          <a
            href="https://www.linkedin.com/in/daeyeon-cho-20a503225/"
            className="button"
          >
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={gage} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Gage Lewis</h3>
          <p className="bulletPoint">JavaScript (ES5/ES6)</p>
          <p className="bulletPoint">JQuery</p>
          <p className="bulletPoint">HTML5/CSS</p>
          <p className="bulletPoint">Express</p>
          <p className="bulletPoint">PostgresSQL</p>
          <p className="bulletPoint">Microsoft Visual Basic(VB.NET/VBA)</p>
          <p className="bulletPoint">React</p>
          <p className="bulletPoint">Java</p>
          <p className="bulletPoint">RESTful API</p>
          <p className="bulletPoint">Heroku/Render Deployment</p>
          <a href="https://www.linkedin.com/in/gage-lewis1/" className="button">
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={jeremy} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Jeremy Linder</h3>
          <p className="bulletPoint">JavaScript (ES5/ES6)</p>
          <p className="bulletPoint">JQuery</p>
          <p className="bulletPoint">HTML5/CSS</p>
          <p className="bulletPoint">Express</p>
          <p className="bulletPoint">PostgresSQL</p>
          <p className="bulletPoint">Node.js</p>
          <p className="bulletPoint">React</p>
          <p className="bulletPoint">Git</p>
          <p className="bulletPoint">RESTful API</p>
          <p className="bulletPoint">Heroku/Render Deployment</p>
          <a
            href="https://www.linkedin.com/in/jeremyrlinder/"
            className="button"
          >
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={robin} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Robin Kluis</h3>
          <p className="bulletPoint">JavaScript (ES5/ES6)</p>
          <p className="bulletPoint">JQuery</p>
          <p className="bulletPoint">HTML5/CSS</p>
          <p className="bulletPoint">Express</p>
          <p className="bulletPoint">PostgresSQL</p>
          <p className="bulletPoint">Node.js</p>
          <p className="bulletPoint">React</p>
          <p className="bulletPoint">Git</p>
          <p className="bulletPoint">RESTful API</p>
          <p className="bulletPoint">Heroku/Render Deployment</p>
          <a href="https://www.linkedin.com/in/rmkluis/" className="button">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderSqlBox;
