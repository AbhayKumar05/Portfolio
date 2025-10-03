import React, { useState } from "react";
import "./Project.css";
import Navbar from "../components/Navbar"; 


const projectData = [
  {
    id: 1,
    title: "Heartware",
    teaser: "Award-winning donation platform for Cruz Vermelha Portuguesa...",
    description:
      "Heartware (CVP360) is an award-winning donation platform built for Cruz Vermelha Portuguesa. It provides a seamless and engaging experience for humanitarian donations, allowing users to donate directly using bank cards. Features include a secure payment system, interactive dashboards for donors and admins, and real-time campaign monitoring. Built with React, .NET Core, PostgreSQL, and deployed on Azure, the platform makes philanthropy more accessible through a modern and intuitive UI.",
    image: "profiles/heartware.jpeg",
    tech: ["React", ".NET Core", "PostgreSQL", "Azure", "Figma"],
    github: "https://github.com/Joaquim-Claudio/CVP360",
  },
  {
    id: 2,
    title: "AutoCargo",
    teaser: "Manual and autonomous ESP32-powered vehicle with real-time control...",
    description:
      "AutoCargo is a smart vehicle prototype that supports both manual and autonomous driving using ESP32 with sensors and actuators. It integrates real-time obstacle detection, slope and speed tracking, and battery monitoring. A React web dashboard communicates via MQTT and Socket.io to display live telemetry. Data is processed by a Node.js backend, containerized in Docker for scalability. This project explores IoT, robotics, and real-time systems with a practical dashboard for user interaction.",
    image: "profiles/iot-project.png",
    tech: ["React", "MQTT", "Node.js", "Socket.io", "Docker"],
    github: "https://github.com/freshmimnt/projeto-esp32",
  },
  {
    id: 3,
    title: "Magna Opus",
    teaser: "A scalable microservices-based e-commerce bookstore...",
    description:
      "Magna Opus is a robust e-commerce bookstore designed with a microservices architecture. It offers inventory management, AI-powered book recommendations, and secure purchasing. Built with PHP, Python, and Java, it leverages MySQL databases for reliable storage. Deployed with Docker and Kubernetes, it ensures scalability, high availability, and fault tolerance. This project demonstrates expertise in distributed systems, cloud deployment, and data-driven personalization for online retail.",
    image: "profiles/magna.jpeg",
    tech: ["PHP", "Python", "Java", "MySQL", "Docker", "Kubernetes"],
    github: "https://github.com/AbhayKumar05/Projeto_software",
  },
  {
    id: 4,
    title: "Lisbon Spots",
    teaser: "Interactive web app to discover Lisbon’s best photo spots...",
    description:
      "Lisbon Spots is a tourism and photography web application that helps users discover and share Lisbon’s hidden gems. It integrates geospatial data and Google Maps API for interactive navigation. Users can filter by categories, create custom routes, and contribute community reviews/photos. Built with Firebase, Android, MySQL, Bootstrap, and Figma, it provides a responsive and modern UI. The project combines data visualization with user engagement for an enhanced travel experience.",
    image: "profiles/LISBON-PROJECT.png",
    tech: ["Firebase", "Android", "MySQL", "Bootstrap", "Google Maps API", "Figma"],
    github: "https://github.com/edjasilva/LisbonSpots",
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <Navbar />

      <div className="projects-content">
        <div className="recruiters-project">
          {projectData.map((proj) => (
            <div
              className="project-card"
              key={proj.id}
              onClick={() => setActiveProject(proj)}
            >
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description.slice(0, 120)}...</p>
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

      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="modal-image">
              <img src={activeProject.image} alt={activeProject.title} />
            </div>
            <div className="modal-content">
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className="modal-tech">
                {activeProject.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
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