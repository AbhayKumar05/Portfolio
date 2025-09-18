import React from "react";
import "./Project.css";
import Navbar from "../components/Navbar"; // adjust path if Navbar is in another folder

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
      {/* Navbar at the top */}
      <Navbar />

      {/* Projects Section */}
      <div className="projects-content">
        <div className="recruiters-project">
          {projectData.map((proj) => (
            <div className="project-card" key={proj.id}>
              {/* Top Half Image */}
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              {/* Bottom Half Text */}
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
