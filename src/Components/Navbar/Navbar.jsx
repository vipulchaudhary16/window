import React from "react";
import "./navbar.css";
import cloud from "../../Assets/cloudy.png";
import window from "../../Assets/window.png";
import fileExplorer from "../../Assets/folder.png";
import vscode from "../../Assets/vscode.png";

export default function Navbar() {
  return (
    <nav>
      <div className="start">
        <img src={cloud} alt="" className="icon" />
        <div className="flex_vr">
          {/* TODO : Display Realtime weather */}
          <span>20*C</span>
          <span>Sunny</span>
        </div>
      </div>
      <div className="middle flex_hr">
        <img src={window} alt="" className="task_icon" />
        <img src={fileExplorer} alt="" className="task_icon" />
        <img src={vscode} alt="" className="task_icon" />
      </div>
      <div className="end flex_vr">
        <span className="time">
          {new Date()
            .toLocaleTimeString()
            .slice(0, new Date().toLocaleTimeString().length - 3)}
        </span>
        <span className="date">{new Date().toLocaleDateString()}</span>
      </div>
    </nav>
  );
}
