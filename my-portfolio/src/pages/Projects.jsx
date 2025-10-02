// Projects.jsx
import React, { useState } from "react";
import "./Project.css";
import Navbar from "../components/Navbar";

const projectData = [
  {
    id: 1,
    title: "CVP360 (Heartware)",
    github: "https://github.com/Joaquim-Claudio/CVP360",
    video: "profiles/recruter.mp4", // your new valid video
    image: "profiles/heartware.jpeg",
    tech: ["React", ".NET Core", "PostgreSQL"],
    description:
      "Donation platform for Cruz Vermelha Portuguesa: web dashboard, secure payments, admin panel, user interface.",
  },
  {
    id: 2,
    title: "AutoCargo (ESP32 Vehicle)",
    github: "https://github.com/freshmimnt/projeto-esp32",
    video: "profiles/devop.mp4",
    image: "profiles/iott.png",
    tech: ["React", "MQTT", "Node.js", "Socket.io", "Docker"],
    description:
      "Autonomous/manual cargo vehicle using ESP32, dashboard, obstacle detection, slope & battery monitoring.",
  },
  {
    id: 3,
    title: "Projeto Software / Magna Opus",
    github: "https://github.com/AbhayKumar05/Projeto_software",
    video: "profiles/adven.mp4",
    image: "profiles/magna.jpeg",
    tech: ["PHP", "Python", "Java", "Docker", "Kubernetes", "MySQL"],
    description:
      "E-commerce platform (Livraria Online) with microservices, inventory system, AI recommendations, scalable backend.",
  },
  {
    id: 4,
    title: "LisbonSpots",
    github: "https://github.com/edjasilva/LisbonSpots",
    video: null, // maybe no video for this
    image: "profiles/lisbonspot.png",
    tech: ["React", "Google Maps API", "Firebase", "Bootstrap"],
    description:
      "Web app for photography-lovers: map of Lisbon’s photo spots, filtering, community sharing, routing & statistics.",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  const openModal = (id) => setOpenId(id);
  const closeModal = () => setOpenId(null);

  const openProject = projectData.find((p) => p.id === openId);

  return (
    <>
      <Navbar />
      <div className="projects-content">
        <div className="recruiters-project">
          {projectData.map((proj) => (
            <div
              className="project-card"
              key={proj.id}
              onClick={() => openModal(proj.id)}
            >
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((tech, idx) => (
                    <button key={idx} className="tech-btn">
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {openProject.video ? (
              <video
                src={`/${openProject.video}`}
                controls
                autoPlay
                className="modal-video"
              />
            ) : (
              <img
                src={openProject.image}
                alt={openProject.title}
                className="modal-video"
              />
            )}
            <div className="modal-details">
              <h2>{openProject.title}</h2>
              <p>{openProject.description}</p>
              <div className="project-tech">
                {openProject.tech.map((tech, idx) => (
                  <button key={idx} className="tech-btn">
                    {tech}
                  </button>
                ))}
              </div>
              <a
                href={openProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}










/*import React from "react";
import "./Project.css";
import Navbar from "../components/Navbar"; 

const projectData = [
  {
    id: 1,
    title: "Heartware",
    description:
      "A web platform designed to make donating to the Cruz Vermelha Portuguesa more accessible and engaging. A platform to create a seamless experience where anyone with a bank card could support humanitarian initiatives across Portugal.",
    image: "profiles/heartware.jpeg",
    tech: ["React", ".NET Core", "PostgreSQL"],
  },
  {
    id: 2,
    title: "AutoCargo",
    description:
      "This project consists of building a manual and autonomous vehicle using an ESP32 with sensors and actuators. The vehicle can be controlled via a Web Dashboard, where it detects obstacles, slope, speed, and battery level. Data communication happens through MQTT with a Node.js backend and data storage",
    image: "profiles/iott.png",
    tech: ["React", "MQTT", "REST API", "socket.io", "Docker"],
  },
  {
    id: 3,
    title: "Magna Opus",
    description:
      "The Livraria Online project is a scalable e-commerce bookstore with a microservices architecture. It features inventory management, AI-powered book recommendations supported by MySQL databases, Docker, and Kubernetes for scalability, security, and high availability.",
    image: "profiles/magna.jpeg",
    tech: ["PHP", "Python", "Java", "Python", "MySQL", "Docker", "Kubernetes"],
  },
  {
    id: 4,
    title: "Lisbon Spots",
    description:
      "The LisbonSpot project is a web application designed to help tourists and photography enthusiasts discover Lisbon’s best photo spots through an interactive map, filters, and community sharing. It integrates geospatial data, routing, and statistics to provide updated information, personalized routes, and an intuitive, responsive interface.",
    image: "profiles/lisbonspot.png",
    tech: ["Firebase", "Android", "MySQL", "Bootstrap", "Google Maps API", "Figma"],
  }, 
];

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="projects-content">
        <div className="recruiters-project">
          {projectData.map((proj) => (
            <div className="project-card" key={proj.id}>
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((tech, index) => (
                    <button key={index} className="tech-btn">
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
*/