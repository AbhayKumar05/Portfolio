import React from "react";
import "./Recruiters.css";

export default function Recruiters() {
  const handleShowCV = () => {
    window.open("/cv.pdf", "_blank");
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abhay-kumar-13831b248", "_blank");
  };
  return (
    <div className="recruiters-bg-container">
      <video
        className="recruiters-bg-video"
        src="/videos/newrecruiter.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="recruiters-overlay">
        <h1>ABHAY KUMAR</h1>
        <p>I’m Abhay Kumar, a Computer Engineering graduate from IADE Lisbon, Portugal. With a strong foundation in full-stack web and Android development, I specialize in building impactful, user-friendly software solutions, from responsive web applications with React and Spring Boot to scalable backend systems and performance-focused Android apps. My experience spans professional internships, academic projects, and hackathons, where I’ve honed both my technical expertise and collaborative problem-solving skills.
           During my internship at Codveda Technologies, I worked across frontend and backend development, gaining practical insights into delivering reliable and responsive web experiences. I also had the opportunity to co-develop Heartware, a donation platform built with React, .NET Core, and PostgreSQL, which secured 2nd place in the Apps Category and an Honorable Mention at Tech4Good 2025. Experiences like these have not only sharpened my technical skills but also strengthened my adaptability, creativity, and ability to thrive in fast-paced, team-driven environments.
           I’m passionate about using technology to create meaningful impact and continuously expanding my knowledge in areas like software architecture, API development, and system security. Moving forward, I’m eager to contribute to forward-thinking teams, tackle complex challenges, and continue building solutions that blend innovation with real-world value.</p>
        <div className="recruiters-buttons">
          <button onClick={handleShowCV}>▶ Resume</button>
          <button onClick={handleLinkedIn}>ⓘ LinkedIn</button>
        </div>
      </div>
    </div>
    //TO:DO- add cv file (cv.pdf)
  );
}
