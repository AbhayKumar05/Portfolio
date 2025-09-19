import React from "react";
import "./Education.css";
import Navbar from "../components/Navbar"; 

const projectData = [
  {
    id: 1,
    title: "Bachelor's degree in Computer Engineering",
    description:
    "I graduated with a solid foundation in Computer Engineering, where I worked on projects that connected both software and hardware, gradually increasing in complexity. Throughout my degree, I built a portfolio that reflects not only my technical skills but also my ability to manage projects and collaborate in teams. The program was closely aligned with industry trends like Artificial Intelligence, IoT, and intelligent systems, giving me strong scientific and technical knowledge as well as hands-on experience with physical computing and IoT technologies. This comprehensive education has prepared me to tackle real-world challenges in the tech industry.",
    image: "profiles/iade.png",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="projects-content">
        <div className="recruiters-project">
          {projectData.map((proj) => (
            <div className="education-card" key={proj.id}>
              {/* Top Half Image */}
              <div className="education-image">
                <img src={proj.image} alt={proj.title} />
              </div>

              {/* Bottom Half Text */}
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
