import React from "react";
import "./Recruiters.css";

export default function Recruiters() {
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
        <h1>Welcome, Recruiter!</h1>
        <p>I’m Abhay Kumar, a Computer Engineering student at IADE Lisbon (graduating July 2025) with a strong foundation in full-stack web and Android development. </p>
        <p> I enjoy building impactful software solutions—from responsive web apps with React and Spring Boot to mobile applications with Android SDK—and I’m always eager to learn and grow. I’ve gained hands-on experience through internships, hackathons, and projects, including co-developing Heartware, a donation platform that won 2nd place at Tech4Good 2025. Skilled in Java, Python, JavaScript, .NET Core, and PostgreSQL, I thrive in collaborative, fast-paced environments and am passionate about contributing to forward-thinking tech teams.</p>
        <div className="recruiters-buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
