import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar"; 

{/*}
export default function ContactPopup({ triggerText }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} className="popup-trigger">
        {triggerText}
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Me</h3>
            <p>If you’re a recruiter or interested in hiring me, feel free to get in touch!</p>
            
            <form className="popup-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>

            <button className="close-btn" onClick={togglePopup}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
*/}

const projectData = [
  {
    id: 1,
    title: "Abhay Kumar",
    description:
      "Software Engineer | Experience in Web, IoT & Mobile Development | Skilled in Java, React, Python, SQL | Recent Computer Engineering Graduate",
    tech: ["IADE", "Software Engineer"],
    contact: {
      email: "abhaylagah01@gmail.com",
      phone: "+351 932 441 354",
      linkedin: "https://www.linkedin.com/in/abhay-kumar-13831b248/",
      note: "I’m always happy to connect or chat about opportunities!"
    }
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
              <div className="contact-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p>
                 <a href={proj.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </p>

              <div className="contact-info">
                <p> {proj.contact.email}</p>
                <p> {proj.contact.phone}</p>
                <p> {proj.contact.note}</p>
              </div>
            </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
