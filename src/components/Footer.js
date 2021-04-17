import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="level has-text-white">
          <div className="level left">
            <div className="level-item">
              <a href="#" className="title is-4">
                Bulma Site
              </a>
            </div>
          </div>
          <div className="level right">
            <a href="#" className="level-item pl-3 has-text-primary">
              {" "}
              Sample Link 1{" "}
            </a>
            <a href="#" className="level-item pl-3 has-text-primary">
              Sample Link 2
            </a>
            <a href="#" className="level-item pl-3 has-text-primary">
              Sample Link 3
            </a>
          </div>
        </div>
        <hr />
        <div className="columns is-vcentered">
          <div className="column has-text-centered has-text-left-tablet">
            <a
              href="https://www.facebook.com/oskee3"
              className="icon has-text-primary pr-5 pl-5"
            >
              <span className="fa-stack">
                <i class="fab fa-facebook fa-3x"></i>
              </span>
            </a>
            <a
              href="https://www.instagram.com/ozgeecsknnn/"
              className="icon has-text-primary pr-5 pl-5"
            >
              <span className="fa-stack">
                <i class="fab fa-instagram fa-3x"></i>
              </span>
            </a>
            <a
              href="https://twitter.com/oskee3/"
              className="icon has-text-primary pr-5 pl-5"
            >
              <span className="fa-stack">
                <i class="fab fa-twitter-square fa-3x"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%B6zge-co%C5%9Fkun-g%C3%BCrsucu-28380987/"
              className="icon has-text-primary pr-5 pl-5"
            >
              <span className="fa-stack">
                <i class="fab fa-linkedin fa-3x"></i>
              </span>
            </a>
            <a
              href="https://github.com/codermother"
              className="icon has-text-primary pr-5 pl-5"
            >
              <span className="fa-stack">
                <i class="fab fa-github fa-3x"></i>
              </span>
            </a>
          </div>

          <div className="column has-text-centered has-text-right-tablet">
            <p className="subtitle is-6 "> Created by CoderMother @2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
