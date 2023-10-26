import React from "react";
import "./service.css";
import UIDesign from "../../asset/ui-design.png";
import WebDevelopment from "../../asset/web-development.png";
import MobileApp from "../../asset/mobile-app.jpg";

const Service = () => {
  return (
    <section id="services">
      <span className="skillTitle">My Services</span><br></br>
      <span className="skillDesc">
        I am a passionate and dedicated software engineering student with a strong interest in developing innovative web and mobile applications. I enjoy tackling challenging problems and collaborating with teams to deliver impactful solutions. My goal is to contribute to the tech industry by creating user-centric applications that improve people's lives.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>I specialize in designing intuitive and visually appealing user interfaces that provide a seamless user experience.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDevelopment} alt="WebDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>I have expertise in developing responsive and scalable web applications using modern frameworks and technologies.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={MobileApp} alt="MobileApp" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mobile App Development</h2>
            <p>I have hands-on experience in building cross-platform mobile applications that deliver a rich and engaging user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;