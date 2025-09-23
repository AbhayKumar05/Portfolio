import React from "react";
import { Routes, Route } from "react-router-dom";
import WhosWatching from "./pages/WhosWatching";
import Adventurer from "./pages/Adventurer";
import Recruiters from "./pages/Recruiters";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Opening from "./pages/Opening";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Developer from "./pages/Developer";

export default function App() {
  return (
    <Routes>
      <Route path="/watching" element={<WhosWatching />} />
      <Route path="/adventurer" element={<Adventurer />} />
      <Route path="/recruiters" element={<Recruiters />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/" element={<Opening />} />
    </Routes>
  );
}
