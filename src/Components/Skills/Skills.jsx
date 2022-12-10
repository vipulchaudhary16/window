import { React } from "react";
import "./skills.css";
import folder from "../../Assets/folder.png";
import Actions from "../Actions";
import { RiArrowDropDownLine } from "react-icons/ri";

import {Icons} from "../../Assets";

export default function Skills() {
  return (
    <div className=" skills__main">
      <div className="skills__header flex_hr">
        <div className="skills__tab">
          <img src={folder} alt="" />
          <span>Skills</span>
        </div>
        <div className="end flex_hr">
          <Actions />
        </div>
      </div>
      <div className="skills__content">
        <div class="skills__box">
            <RiArrowDropDownLine />
            <span className="skill__name">Web Development</span>
            <div className="skills__container">
              <div className=" skill">
                <img src={Icons.html} alt="" />
                <span>HTML</span>
              </div>
              <div className=" skill">
                <img src={Icons.css} alt="" />
                <span>CSS</span>
              </div>
              <div className=" skill">
                <img src={Icons.js} alt="" />
                <span>JavaScript</span>
              </div>
              <div className=" skill">
                <img src={Icons.reactjs} alt="" />
                <span>ReactJS</span>
              </div>
              <div className=" skill">
                <img src={Icons.nodejs} alt="" />
                <span>NodeJS</span>
              </div>
              <div className=" skill">
                <img src={Icons.mongodb} alt="" />
                <span>MongoDB</span>
              </div>
            </div>
        </div>
        <div class="skills__box">
            <RiArrowDropDownLine />
            <span className="skill__name">App Development</span>
            <div className="skills__container">
              <div className=" skill">
                <img src={Icons.java} alt="" />
                <span>Java</span>
              </div>
              <div className=" skill">
                <img src={Icons.kotlin} alt="" />
                <span>Kotlin</span>
              </div>
            </div>
        </div>

        <div class="skills__box">
            <RiArrowDropDownLine />
            <span className="skill__name">Others</span>
            <div className="skills__container">
              <div className=" skill">
                <img src={Icons.firebase} alt="" />
                <span>Firebase</span>
              </div>
              <div className=" skill">
                <img src={Icons.sql} alt="" />
                <span>SQL</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
