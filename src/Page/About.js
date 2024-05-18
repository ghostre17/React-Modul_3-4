import React from "react";
import "./index-module.css";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <hr></hr>
        <h2>Profile</h2>
        <ul className="Profile">
          <h4>Name</h4>
          <h6>Muhammad Reyhan Asahy</h6>
          <h4>Education</h4>
          <ul>
            <li>MI Darussalam Pacet year graduation - 2019</li>
            <li>MTS Pacet year graduation - 2022</li>
            <li>SMK Telkom Malang year graduation - 2025</li>
          </ul>
          <h4>Expertise</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
          </ul>
          <h4>Experience</h4>
          <ul>
            <li>
              Mengikuti Intro to Software Engineering - 19 january 2024 by RevoU
            </li>
            <li>
              Mengikuti DigiUp UI/UX Designer - 2023 by Yayasan Pendidikan
              telkom
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}
    
export default About;
