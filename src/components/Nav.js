import React from "react";

function Nav() {
  return (
    <div>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="#about">
                {" "}
                About
              </a>
              <a class="navbar-item" href="#products">
                {" "}
                Products
              </a>
              <a class="navbar-item" href="#team">
                {" "}
                Team
              </a>
              <a class="navbar-item" href="#contact">
                {" "}
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
