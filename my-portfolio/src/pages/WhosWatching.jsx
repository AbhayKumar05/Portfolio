import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhosWatching.css";

const profiles = [
  { id: 1, name: "Recruiters", image: "/profiles/recruiter.png", path: "/recruiters" },
  { id: 2, name: "Projects", image: "/profiles/projects.png", path: "/projects" },
  { id: 3, name: "Adventurer", image: "/profiles/adventurer.png", path: "/adventurer" },
  { id: 4, name: "Contact", image: "/profiles/contact.png", path: "/contact" },
];
export default function WhosWatching() {
  const navigate = useNavigate();

  return (
    <div className="whoswatching">
      <h1>Who's Watching?</h1>
      <div className="profiles">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile"
            onClick={() => navigate(profile.path)}
          >
            <img src={profile.image} alt={profile.name} />
            <span>{profile.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
