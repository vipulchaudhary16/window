import React, { useContext } from "react";
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
          <div className="middle ">
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
            Myself Vipul Chaudhary, computer engineering student from PDEU, Gandhinagar. I'm 2 ⭐ coder with max rating 1636 on CodeChef, Newbie on Codeforces with max rating of 1002 and have solved over 270 questions on LeetCode. I enjoy making products that have the potential to influence the way the world thinks. I am familiar with
            Web development with HTML, CSS, ReactJS and backend development with NodeJS, PHP and Android development using Java and Kotlin. I enjoy problem solving
          </p>
        </div>
      </article>
    </section>
  );
}
