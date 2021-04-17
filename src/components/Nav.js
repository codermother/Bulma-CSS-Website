import React from "react";

function Nav() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
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
