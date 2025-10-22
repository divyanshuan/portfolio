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
          I'm Divyanshu Verma, a passionate Software Developer and Computer
          Science & Engineering professional, currently pursuing my M.Tech at
          NIT Hamirpur. With extensive experience in React.js, Python,
          JavaScript, Laravel, and full-stack development, I specialize in
          building impactful, user-friendly applications. My expertise spans
          frontend development with React.js, backend development with Laravel
          and Node.js, and database management with MySQL and Firebase. I have
          worked as a Software Developer Intern at StarOps Technologies and
          Sirom Pvt. Ltd., gaining valuable experience in team coordination and
          project management. I'm always looking to improve my skills and
          contribute meaningfully in collaborative environments while exploring
          emerging technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
