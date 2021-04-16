import React from "react";
import Nav from "./Nav";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <header className="hero is-fullheight">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div className="container has-text-right">
            <h1 className="title has-text-weight-light has-text-primary is-1">
              Minimal & Simple & Impressive
            </h1>
            <h2 className="subtitle has-text-weight-light has-text-black is-2">
              Bulma Project
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
