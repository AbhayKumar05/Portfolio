import React from "react";
import "./Education.css";
import "./Project.css";
import Navbar from "../components/Navbar"; 



const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Engineering",
    description:
      "I graduated with a solid foundation in Computer Engineering, where I worked on projects that connected both software and hardware, gradually increasing in complexity. Throughout my degree, I built a portfolio that reflects not only my technical skills but also my ability to manage projects and collaborate in teams. The program was closely aligned with industry trends like Artificial Intelligence, IoT, and intelligent systems, giving me strong scientific and technical knowledge as well as hands-on experience with physical computing and IoT technologies. This comprehensive education has prepared me to tackle real-world challenges in the tech industry.",
    image: "profiles/iade.png",
  },
  {
    id: 2,
    title: "AWS Training & Certification",
    description:
      "Completion Certificate: AWS SimuLearn – Cloud Computing Essentials. Completed September 20, 2025. Verified by Michelle Vaz, Director of AWS Training & Certification.",
    image: "profiles/aws.png", 
  },
  {
    id: 3,
    title: "Spring Boot Essentials 2",
    description:
      "Completed the 'Spring Boot Essentials 2' course, covering full lifecycle Spring Boot development, from project setup to API security, monitoring, Docker integration, and deployment via Docker Compose. Hands-on experience in scalable backend development and RESTful API best practices.",
    image: "profiles/springbbote.png", 
  },
];


export default function Education() {
  const [activeEducation, setActiveEducation] = React.useState(null);

  return (

      
    <>
      <Navbar />
      {/*<div className="education-page">
        <div className="education-list">
          {educationData.map((edu) => (
            <div className="education-card" key={edu.id}>
              <div className="education-image">
                <img src={edu.image} alt={edu.title} />
              </div>
              <div className="education-info">
                <h3>{edu.title}</h3>
                <p>{edu.description.slice(0, 150)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>*/}
      <div className="education-page">
        <div className="education-list">
          {educationData.map((edu) => (
            <div
              className="education-card"
              key={edu.id}
              onClick={() => setActiveEducation(edu)}
            >
              <div className="education-image">
                <img src={edu.image} alt={edu.title} />
              </div>

              <div className="education-info">
                <h3>{edu.title}</h3>
                <p>{edu.description.slice(0, 120)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeEducation && (
        <div className="education-modal-overlay" onClick={() => setActiveEducation(null)}>
          <div
            className="education-modal"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="modal-image">
              <img src={activeEducation.image} alt={activeEducation.title} />
            </div>
            <div className="modal-content">
              <h2>{activeEducation.title}</h2>
              <p>{activeEducation.description}</p>
            </div>
          </div>
        </div>
      )}
    </> 
  );
}

      
