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
    <>
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
      {/* Carousel Section - now below video/overlay */}
      {/*<h1 className="recruiters-carousel-title">Today's Top Picks for recruiter</h1>*/}
      
      <div className="recruiters-carousel-bg">
        <div className="recruiters-carousel">
          <div className="carousel-box" onClick={() => window.open('/projects', '_self')}>Projects</div>
          <div className="carousel-box" onClick={() => window.open('/adventurer', '_self')}>Skills</div>
          <div className="carousel-box" onClick={() => window.open('/contact', '_self')}>Who's Watching </div>
          <div className="carousel-box" onClick={() => window.open('/recruiters', '_self')}>Experiences</div>
          <div  className="carousel-box" onClick={() => window.open('/whoswatching', '_self')}>Contact me</div>
        </div>
      </div>
    </>
    
    //TO:DO- add cv file (cv.pdf)
  );
}
