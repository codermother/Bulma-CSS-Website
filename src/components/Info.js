import React from "react";
import CoderPhoto from "../images/coder.jpg";
import Cards from "./Cards";

function Info() {
  return (
    <div className="section ml-6 mr-6" id="about">
      <Cards />
      <div className="columns m-6 is-vcentered">
        <div className="column">
          <figure class="image">
            <img src={CoderPhoto} alt="Young Coder" />
          </figure>
        </div>
        <div className="column ">
          <div className="content ml-3">
            <h3>Hi Everyone!</h3>
            <p>
              <em>Lorem ipsum, </em> dolor sit amet consectetur adipisicing
              elit. <strong>Tempore reiciendis </strong>
              reprehenderit eveniet repellendus labore enim.
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, nostrum.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, nostrum.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, nostrum.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere, nostrum.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
