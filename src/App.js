import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles.js";
import Info from "./components/Info";
import SocialInfo from "./components/SocialInfo";

function App() {
  return (
    <div className="App">
      <Hero />
      <Info />
      <Tiles />
      <SocialInfo />
    </div>
  );
}

export default App;
