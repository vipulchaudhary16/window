import { React, useState } from "react";
import "./desktop.css";

import aboutMe from "../../Assets/aboutMe.png";
import folder from "../../Assets/folder.png";
import AboutMe from "../AboutMe/AboutMe";

import { motion, AnimatePresence } from "framer-motion";

export default function Desktop() {
  const [currWindow, setcurrWindow] = useState("");
  return (
    <div className="container">
      <div className="navs">
        <div className="nav_item">
          <img
            src={aboutMe}
            onClick={() => setcurrWindow("about-me")}
            alt=""
            className="nav_icon"
          />
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
        <AnimatePresence>
          <motion.div
            key={currWindow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currWindow == "about-me" ? <AboutMe currWindow = {currWindow} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
