import React from "react";
import "./navbar.css";
import cloud from "./cloudy.png";
import window from "./window.png";
import fileExplorer from "../../Assets/folder.png";
import vscode from './vscode.png'

export default function Navbar() {
  return (
    <nav>
      <div className="start">
        <img src={cloud} alt="" className="icon" />
        <div className="flex_vr">
          <span>20*C</span>
          <span>Sunny</span>
        </div>
      </div>
      <div className="middle flex_hr">
        <img src={window} alt="" className="icon" />
        <img src={fileExplorer} alt="" className="icon" />
        <img src={vscode} alt="" className="icon" />
      </div>  
      <div className="end flex_vr">
        <span className="time">{new Date().toLocaleTimeString().slice(0, new Date().toLocaleTimeString().length-3)}</span>
        <span className="date">{new Date().toLocaleDateString()}</span>
      </div>
    </nav>
  );
}
