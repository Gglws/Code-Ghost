import React from "react";
import profilePic from "./profile_highlights/images.jpg";

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
          <img src={profilePic} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Daeyeon Cho</h3>
          <p className="bulletPoint">Bullet point 1</p>
          <p className="bulletPoint">Bullet point 2</p>
          <p className="bulletPoint">Bullet point 3</p>
          <p className="bulletPoint">Bullet point 4</p>
          <p className="bulletPoint">Bullet point 5</p>
          <p className="bulletPoint">Bullet point 6</p>
          <p className="bulletPoint">Bullet point 7</p>
          <a
            href="https://www.linkedin.com/in/daeyeon-cho-20a503225/"
            className="button"
          >
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={profilePic} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Gage Lewis</h3>
          <p className="bulletPoint">Bullet point 1</p>
          <p className="bulletPoint">Bullet point 2</p>
          <p className="bulletPoint">Bullet point 3</p>
          <p className="bulletPoint">Bullet point 4</p>
          <p className="bulletPoint">Bullet point 5</p>
          <p className="bulletPoint">Bullet point 6</p>
          <p className="bulletPoint">Bullet point 7</p>
          <a href="https://www.linkedin.com/in/gage-lewis1/" className="button">
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={profilePic} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Jeremy Linder</h3>
          <p className="bulletPoint">Bullet point 1</p>
          <p className="bulletPoint">Bullet point 2</p>
          <p className="bulletPoint">Bullet point 3</p>
          <p className="bulletPoint">Bullet point 4</p>
          <p className="bulletPoint">Bullet point 5</p>
          <p className="bulletPoint">Bullet point 6</p>
          <p className="bulletPoint">Bullet point 7</p>
          <a
            href="https://www.linkedin.com/in/jeremyrlinder/"
            className="button"
          >
            LinkedIn
          </a>
        </div>
        <div className="sqlSubBox">
          <img src={profilePic} className="sqlSubBoxPic" alt="Profile Pic" />
          <h3 className="sqlBoxName">Robin Kluis</h3>
          <p className="bulletPoint">Bullet point 1</p>
          <p className="bulletPoint">Bullet point 2</p>
          <p className="bulletPoint">Bullet point 3</p>
          <p className="bulletPoint">Bullet point 4</p>
          <p className="bulletPoint">Bullet point 5</p>
          <p className="bulletPoint">Bullet point 6</p>
          <p className="bulletPoint">Bullet point 7</p>
          <a href="https://www.linkedin.com/in/rmkluis/" className="button">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderSqlBox;
