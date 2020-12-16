import React from "react";
import logo from "../images/book.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import code from "../images/code.svg";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <span className="logo-img">
          <img src={logo} alt="logo" />
        </span>
        <span className="logo-text">Emoji Dictionary</span>
      </div>
      <div className="menu-content">
        <div className="category category-active">
          <span
            className="category-icon"
            role="img"
            aria-label="smiley category emoji"
          >
            😀
          </span>
          <span className="category-name">Smileys</span>
        </div>
        <div className="category">
          <span
            className="category-icon"
            role="img"
            aria-label="people category emoji"
          >
            👩
          </span>
          <span className="category-name">People</span>
        </div>
        <div className="category">
          <span
            className="category-icon"
            role="img"
            aria-label="animal category emoji"
          >
            🐱
          </span>
          <span className="category-name">Animals</span>
        </div>
        <div className="category">
          <span
            className="category-icon"
            role="img"
            aria-label="nature category emoji"
          >
            🍀
          </span>
          <span className="category-name">Nature</span>
        </div>
      </div>
      <div className="footer">
        <div className="by">
          <img src={code} alt="code icon" /> by{" "}
          <a href="https://shobhitk.netlify.app/">SK</a>
        </div>
        <div className="social-media">
          <a href="https://twitter.com/Ksyrill">
            <img src={twitter} alt="twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/shobhit-kuruvilla/">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="https://github.com/villdev">
            <img src={github} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
