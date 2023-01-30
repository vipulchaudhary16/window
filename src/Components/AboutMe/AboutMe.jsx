import React from "react";
import "./aboutme.css";
import { FiSave } from "react-icons/fi";
import { ImUndo } from "react-icons/im";
import { GoSync } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import Actions from '../Actions'

import myself from '../../Assets/myself.png'


export default function AboutMe() {

  return (
    <section>
      <div className="aboutme__main">
        <header>
          <div className="start">
            <FiSave />
            <ImUndo />
            <GoSync />
          </div>
          <div className="middle">
            <span>About me - Word</span>
          </div>
          <div className="end flex_hr">
            <div className="account">
              <FaUserAlt />
              Vipul Chaudhary
            </div>
            <Actions/>
          </div>
        </header>
        <div className="aboutme__menu">
          <span> File </span>
          <span> Home </span>
          <span> Insert </span>
          <span> Draw </span>
          <span> Design </span>
          <span> Layout </span>
          <span> References </span>
          <span> Mailings </span>
          <span> Review </span>
          <span> View </span>
          <span> Help </span>
          <span> Tell me</span>
        </div>
      </div>
      <article className="about_container">
        <div className="about__content">
          <img src={myself} alt="MYSELF"/>
          <p className="about">
          I am a web developer with a passion for solving problems, learning new things, and building awesome applications. I love to learn about new technologies and apply them to my work. I work with a variety of technologies, including React, Node, Express, MongoDB, MySQL, Firebase Java, Kotlin.
          </p>
        </div>
      </article>
    </section>
  );
}
