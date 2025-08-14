import React from "react";
import { Routes, Route } from "react-router-dom";
import WhosWatching from "./pages/WhosWatching";
import Adventurer from "./pages/Adventurer";
import Recruiters from "./pages/Recruiters";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WhosWatching />} />
      <Route path="/adventurer" element={<Adventurer />} />
      <Route path="/recruiters" element={<Recruiters />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
