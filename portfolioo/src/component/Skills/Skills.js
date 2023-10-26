import React, { useState } from "react";
import "./skills.css";
import image from "./skill.jpg"; // Import the image file

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "skill.jpg";
    link.click();
  };

  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <br />
      <span className="skillDesc">
        I am a passionate and dedicated software engineering student with a strong interest in developing innovative web and mobile applications. I enjoy tackling challenging problems and collaborating with teams to deliver impactful solutions. My goal is to contribute to the tech industry by creating user-centric applications that improve people's lives.
      </span>

      <div className="tab-titles">
        <p
          className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => openTab("skills")}
        >
          Skills
        </p>
        <p
          className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
          onClick={() => openTab("experience")}
        >
          Experiences
        </p>
        <p
          className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
          onClick={() => openTab("education")}
        >
          Education
        </p>
      </div>

      {activeTab === "skills" && (
        <div className="tab-contents active-tab" id="skills">
          <ul>
            <li>
              <span>UI/UX</span>
              <br />              <br />

              Designing Web/App interfaces
            </li>
            <li>              <br />

              <span>Web Development</span>
              <br />              <br />

              Building responsive websites
            </li>
            <li>              <br />

              <span>Mobile App</span>
              <br />              <br />

              Developing interactive Mobile applications
            </li>
          </ul>
        </div>
      )}

      {activeTab === "experience" && (
        <div className="tab-contents active-tab" id="experience">
          <ul>
            <li>
              <span>Web developer</span>
              <br />              <br />

              Designing Web/App interfaces
            </li>              <br />

            <li>
              <span>Mobile App Development</span>
              <br />              <br />

              Building iOS and Android applications
            </li>              <br />

            <li>
              <span>Database Management</span>
              <br />              <br />

              Working with SQL and NoSQL databases
            </li>
          </ul>
        </div>
      )}

      {activeTab === "education" && (
        <div className="tab-contents active-tab" id="education">
          <ul>
            <li>
              <span>Software Engineering Degree</span>
              <br />              <br />

              Addis Ababa University in 2021-2025
            </li>
            <li>
              
                            <br />
<span>CERTIFICATIONS</span>
              <br />              <br />

              Introduction to Packet Tracer in Cisco Networking Academy®
              <br />
              JAVASCRIPT & JQUERY SURVIVAL GUIDE in GYMNASIUM
              <br />
              UI/UX Design in Udemy
            </li>
          </ul>
        </div>
      )}

      <button className="downloadButton" onClick={handleDownloadImage}>
        Download My CV
      </button>
    </section>
  );
};

export default Skills;