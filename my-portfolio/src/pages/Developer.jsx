import React from "react";
import "./Recruiters.css";
import Navbar from "../components/Navbar"; 


export default function Developer() {
  const handleShowCV = () => {
    window.open("doc/AbhayKumar_CV.pdf", "_blank");
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abhay-kumar-13831b248", "_blank");
  };
  return (
    <>
      <Navbar />
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
           <p> Computer Engineering graduate from IADE Lisbon, Portugal.
            Skilled in React, Spring Boot, Web, Android, and APIs.</p>
           <p> Experience in internships, projects, and hackathons.
           Co-developed award-winning donation platform Heartware.</p>
           <p> Passionate about impactful, scalable, user-focused solutions.</p>
          <div className="recruiters-buttons">
            <button onClick={handleShowCV}>▶ Resume</button>
            <button onClick={handleLinkedIn}>ⓘ LinkedIn</button>
          </div>
        </div>
      </div>
      
      <div className="recruiters-carousel-bg">
        <div className="recruiters-carousel">
          <div className="carousel-box" onClick={() => window.open('/projects', '_self')}>Projects</div>
          <div className="carousel-box" onClick={() => window.open('/skills', '_self')}>Skills</div>
          <div className="carousel-box" onClick={() => window.open('/education', '_self')}>Education </div>
          <div className="carousel-box" onClick={() => window.open('/experience', '_self')}>Experiences</div>
          <div  className="carousel-box" onClick={() => window.open('/contact', '_self')}>Contact me</div>
        </div>
      </div>
    </>
  );
}