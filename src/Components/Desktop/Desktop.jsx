import React from "react";
import "./desktop.css";

import aboutMe from "../../Assets/aboutMe.png";
import folder from "../../Assets/folder.png";

export default function Desktop() {
  return (
    <div className="container">
      <div className="navs">
        <div className="nav_item">
          <img src={aboutMe} alt="" className="nav_icon" />
          <span>About</span>
        </div>
        <div className="nav_item">
          <img src={folder} alt="" className="nav_icon" />
          <span>Skills</span>
        </div>
        <div className="nav_item">
          <img src={folder} alt="" className="nav_icon" />
          <span>Work</span>
        </div>
        <div className="nav_item">
          <img src={folder} alt="" className="nav_icon" />
          <span>Contact</span>
        </div>
      </div>
      <div className="explorer">
        <h2>Hello</h2>
      </div>
    </div>
  );
}
