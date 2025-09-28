// src/pages/Experience.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./Experience.css"; 

const experienceData = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Codveda",
    duration: "July 2025 - August 2025",
    description:
    "Completed structured tasks across frontend and backend web development (HTML, CSS, JavaScript, REST APIs). Gained hands-on experience in building responsive interfaces and backend logic at Codveda Technologies. Developed full-stack projects including a CRUD application with authentication, strengthening skills in React, Node.js, Express, and MongoDB.",
    image: "profiles/codveda.png", 
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7351946178759917570/", 
  },
];

export default function Experience() {
  return (
    <>
      <Navbar />

      <div className="experience-content">
        <h2 className="experience-title">My Professional Experience</h2>
        <div className="experience-list">
          {experienceData.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-image">
                <img src={exp.image} alt={exp.company} />
              </div>

              <div className="experience-info">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                <p>{exp.description}</p>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  🔗 View on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
