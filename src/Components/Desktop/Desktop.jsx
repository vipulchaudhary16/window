import { React, useContext } from "react";
import "./desktop.css";

import folder from "../../Assets/folder.png";
import vscode from "../../Assets/vscode.png"
import AboutMe from "../AboutMe/AboutMe";

import { motion, AnimatePresence } from "framer-motion";
//State context
import windowContext from "../../Context/WindowContext";
import Skills from "../Skills/Skills";
import { Icons } from "../../Assets";
import Contact from "../Contact/Contact";
import VSCode from "../Applications/VSCode";

export default function Desktop() {
  const context = useContext(windowContext);
  const { currWindow, setcurrWindow, show, setShow } = context;

  return (
    <div className="container">
      <div className="navs">
        <div className="nav_item">
          <img
            src={Icons.word}
            onClick={() => {
              currWindow === "about-me"
                ? setcurrWindow("")
                : setcurrWindow("about-me");
              setShow("show");
            }}
            alt=""
            className="nav_icon"
          />
          <span>About me</span>
        </div>
        <div className="nav_item">
          <img
            onClick={() => {
              currWindow === "skills"
                ? setcurrWindow("")
                : setcurrWindow("skills");
              setShow("show");
            }}
            src={folder}
            alt=""
            className="nav_icon"
          />
          <span>Skills</span>
        </div>
        <div className="nav_item">
          <img src={folder} alt="" className="nav_icon" />
          <span>Work</span>
        </div>
        <div className="nav_item">
          <img
            onClick={() => {
              currWindow === "contact"
                ? setcurrWindow("")
                : setcurrWindow("contact");
              setShow("show");
            }}
            src={folder}
            alt=""
            className="nav_icon"
          />
          <span>Contact</span>
        </div>
        <div className="nav_item">
          <img
            onClick={() => {
              currWindow === "vscode"
                ? setcurrWindow("")
                : setcurrWindow("vscode");
              setShow("show");
            }}
            src={vscode}
            alt=""
            className="nav_icon"
          />
          <span>VS Code</span>
        </div>
      </div>

      <div className={`explorer ${show}`}>
        <AnimatePresence>
          <motion.div
            key={currWindow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currWindow === "about-me" ? (
              <AboutMe currWindow={currWindow} />
            ) : null}
            {currWindow === "skills" ? (
              <Skills currWindow={currWindow} />
            ) : null}
            {currWindow === "contact" ? (
              <Contact currWindow={currWindow} />
            ) : null}
            {currWindow === "vscode" ? (<VSCode/>) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
