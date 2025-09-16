import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Opening.css";

export default function Opening() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);

    const audio = new Audio("/audio/intro.mp3"); 
    audio.play();

    setTimeout(() => {
      navigate("/watching");
    }, 1000); 
  };

  return (
    <div
      className={`name-logo ${animate ? "zoom-fade" : ""}`}
      onClick={handleClick}
    >
      <img
        src="https://fontmeme.com/permalink/250916/1d49904966ba1161243f30406e2a0421.png"
        alt="netflix-font"
      />
    </div>
  );
}
