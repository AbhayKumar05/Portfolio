import React, { useState } from "react";
import "./Developer.css";
import "./Recruiters.css";
import Navbar from "../components/Navbar";

export default function Recruiter() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleShowCV = () => {
    window.open("/doc/AbhayKumar_CV.pdf", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/abhay-kumar-13831b248", "_blank");
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="recruiters-bg-container">
        <video
          className="recruiters-bg-video"
          src="/public/videos/newrecruiter.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="recruiters-overlay">
          <h1>ABHAY KUMAR</h1>
          <p>
            Computer Engineering graduate from IADE Lisbon, Portugal. Skilled in
            React, Spring Boot, Web, Android, and APIs.
          </p>
          <p>
            Experience in internships, projects, and hackathons. Co-developed
            award-winning donation platform Heartware.
          </p>
          <p>Passionate about impactful, scalable, user-focused solutions.</p>
          <div className="recruiters-buttons">
            <button onClick={handleShowCV}>▶ Resume</button>
            <button onClick={handleLinkedIn}>ⓘ LinkedIn</button>
          </div>
        </div>
      </div>

      <div className="recruiters-carousel-dev-bg">
        <div className="recruiters-carousel-dev">
          <div
            className="carousel-box"
            onClick={() => window.open("/projects", "_self")}
          >
            Projects
          </div>
          <div
            className="carousel-box"
            onClick={() => window.open("/skills", "_self")}
          >
            Skills
          </div>
          <div
            className="carousel-box"
            onClick={() => window.open("/education", "_self")}
          >
            Education
          </div>
          <div
            className="carousel-box"
            onClick={() => window.open("/experience", "_self")}
          >
            Experiences
          </div>
          <div
            className="carousel-box"
            onClick={() => window.open("/contact", "_self")}
          >
            Contact me
          </div>
          
        </div>
      </div>

      <div className="services-faq-wrapper">
        <section className="services-section">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            Explore how I can bring value to your team or project
          </p>

          <div className="cards-container">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Building responsive and scalable apps using{" "}
                <strong>React, Spring Boot, and REST APIs</strong>.
              </p>
              <a href="https://github.com/edjasilva/LisbonSpots" class="card-btn" role="button">See Projects</a>
            </div>

            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>
                Creating modern Android apps powered by{" "}
                <strong>Firebase, APIs, and clean UI/UX</strong>.
              </p>
              <a href="https://github.com/Projeto-Mobile/BudgetBuddy" class="card-btn" role="button">See Projects</a>
            </div>

            <div className="service-card">
              <h3>Cloud & DevOps</h3>
              <p>
                Deploying reliable solutions with{" "}
                <strong>Docker, Kubernetes, and CI/CD pipelines</strong>.
              </p>
              <a href="https://github.com/AbhayKumar05/Projeto_software" class="card-btn" role="button">See Projects</a>
            </div>

            <div className="service-card">
              <h3>Coming-up Next</h3>
              <p>
                Going to get my hands-on {" "}
                <strong>New Projects, Languages, Technology</strong>.
              </p>
              <a href="https://github.com/codecrafters-io/build-your-own-x.git" class="card-btn" role="button">See Projects</a>
            </div>

          </div>

        </section>

        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {[
              {
                q: "Who are you and what do you specialize in?",
                a: "I'm Abhay Kumar, a Computer Engineering graduate from IADE, Lisbon. I focus on full-stack development with React and Spring Boot, plus DevOps fundamentals.",
              },
              {
                q: "What’s your strongest skill set?",
                a: "Delivering user-focused, scalable applications with clean code, teamwork, and problem-solving mindset.",
              },
              {
                q: "What’s your most impactful project?",
                a: "Heartware — an award-winning donation platform built for the Portuguese Red Cross, improving accessibility to humanitarian support.",
              },
              {
                q: "Do you have professional experience?",
                a: "Yes, I worked as an intern at Codveda, plus multiple hackathons and university projects bridging software and hardware.",
              },
              {
                q: "How can I contact you?",
                a: "The best way is via LinkedIn or email. Quick links are available on the top navigation bar and recruiter page.",
              },
            ].map((faq, index) => (
              <div
                className={`faq-item ${openFAQ === index ? "open" : ""}`}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">{faq.q}</div>
                {openFAQ === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
