import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Opening.css";

export default function Opening() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);

    // Wait until animation ends before navigating
    setTimeout(() => {
      navigate("/watching");
    }, 600); // matches your CSS transition duration
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