import React from "react";
import "./about.css";
import dp from "../../assets/images/divyanshu verma.jpg";
import { FacebookIcon, InstagramIcon } from "../../utility/avtaricons";

const About = () => {
  return (
    <div className="main_about" id="about">
      <div className="image_sec_about">
        <img src={dp} alt="Divyanshu Verma" />
        <div className="contact_icons">
          <a
            href="https://instagram.com/divyanshuanandverma?r=nametag"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/divyanshu.anandverma"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="content_sec_about">
        <h1>About Me</h1>
        <p>
          I’m a Computer Science & Engineering professional, currently pursuing
          my M.Tech at NIT Hamirpur. With experience in software development,
          team coordination, and project management, I enjoy working on
          practical solutions and learning about emerging technologies. I’m
          always looking to improve my skills and contribute meaningfully in a
          collaborative environment.
        </p>
      </div>
    </div>
  );
};

export default About;
