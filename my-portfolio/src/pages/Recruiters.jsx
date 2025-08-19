import React from "react";
import "./Recruiters.css";

export default function Recruiters() {
  return (
    <div className="recruiters-bg-container">
      <video
        className="recruiters-bg-video"
        src="/videos/office.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="recruiters-overlay">
        <h1>Welcome, Recruiter!</h1>
        <p>Discover top projects and connect with talent.</p>
        <div className="recruiters-buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
