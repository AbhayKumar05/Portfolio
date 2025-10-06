import React, { useState } from "react";
import "./Adventurer.css";
import Navbar from "../components/Navbar";


export default function Adventurer() {
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
         <div className="video-background">
            <iframe
              className="video-background"
              src="https://www.youtube.com/embed/kJuceEo-Wvc?autoplay=1&mute=1&loop=1&playlist=kJuceEo-Wvc&controls=0&modestbranding=1&showinfo=0&fs=0&rel=0&disablekb=1modestbranding=1&controls=0&fs=0&rel=0&showinfo=0&disablekb=1"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
        </div>

        <div className="recruiters-overlay">
          <h1>ABHAY KUMAR</h1>
          <p>
            Computer Engineering graduate from IADE Lisbon, Portugal. Skilled in
            React, Spring Boot, Web, Android, and APIs.
          </p>
          <p>
            Explorer at heart — building, learning, and sharing through projects,
            books, blogs, and experiences.
          </p>
          <div className="recruiters-buttons">
            <button onClick={handleShowCV}>▶ Resume</button>
            <button onClick={handleLinkedIn}>ⓘ LinkedIn</button>
          </div>
        </div>
      </div>

      <div className="recruiters-carousel-dev-bg-adventurer">
        <div className="recruiters-carousel-adventurer">
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://www.pragmaticengineer.com", "_blank")
            }
          >
            Blogs
          </div>
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://www.goodreads.com/", "_blank")
            }
          >
            Bookshelf
          </div>
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://open.spotify.com/", "_blank")
            }
          >
            Music
          </div>
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://www.nomadlist.com/", "_blank")
            }
          >
            Adventures
          </div>
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://devpost.com/", "_blank")
            }
          >
            Hackathons
          </div>
          <div
            className="carousel-box-adventurer"
            onClick={() =>
              window.open("https://jamesclear.com/atomic-habits", "_blank")
            }
          >
            Principles
          </div>
        </div>
      </div>
    </>
  );
}
