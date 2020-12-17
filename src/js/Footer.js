import React from "react";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import code from "../images/code.svg";

export default function Footer({ flag }) {
  function getClass() {
    if (flag === "desk") {
      return "footer footer-desk";
    } else {
      return "footer footer-mobile";
    }
  }
  return (
    <div className={getClass()}>
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
  );
}
