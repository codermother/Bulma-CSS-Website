import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles.js";
import Info from "./components/Info";
import SocialInfo from "./components/SocialInfo";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Info />
      <Tiles />
      <SocialInfo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
