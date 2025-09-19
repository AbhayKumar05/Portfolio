import React from "react";
import "./Skills.css";
import Navbar from "../components/Navbar";

export default function Skills() {
  const skillsData = {
  frontend: [
    { id: 1, title: "HTML & CSS", description: "Web markup and styling", image: "/profiles/htmlcss.png" },
    { id: 2, title: "JavaScript", description: "Programming language for web development", image: "/profiles/javascript.png" },
    { id: 3, title: "React", description: "Frontend JavaScript library", image: "/profiles/react.png" },
    { id: 4, title: "Bootstrap", description: "CSS framework for responsive design", image: "/profiles/bootstrap.png" },
  ],
  backend: [
    { id: 1, title: "PHP", description: "Backend language", image: "/profiles/php.png" },
    { id: 2, title: "Java", description: "Object-oriented programming language", image: "/profiles/java.png" },
    { id: 3, title: "Node.js", description: "Backend JavaScript runtime environment", image: "/profiles/nodejs.png" },
    { id: 4, title: "Spring Boot", description: "Java-based framework for web applications", image: "/profiles/springboot.png" },
    { id: 5, title: "Python", description: "General-purpose programming language", image: "/profiles/python.png" },
  ],
  devops: [
    { id: 1, title: "Docker", description: "Containerization platform", image: "/profiles/docker.png" },
    { id: 2, title: "Kubernetes", description: "Container orchestration", image: "/profiles/kubernetes.png" },
  ],
  databases: [
    { id: 1, title: "MySQL", description: "Relational database management system", image: "/profiles/mysql.png" },
    { id: 2, title: "PostgreSQL", description: "Advanced open-source relational database", image: "/profiles/postgresql.png" },
  ],
  other: [
    { id: 1, title: "Git", description: "Version control system", image: "/profiles/git.png" },
    { id: 2, title: "Agile", description: "Development methodology", image: "/profiles/agile.png" },
  ]
};


  return (
    <>
      <Navbar />
      <div className="skills-content">
        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="skills-grid">
              {items.map((skill) => (
                <div className="skill-card" key={skill.id}>
                  <div className="skill-image">
                    <img src={skill.image} alt={skill.title} />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.title}</h3>
                    <p id="desc">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
