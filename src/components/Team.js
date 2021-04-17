import React from "react";
import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";

function Team() {
  return (
    <div className="section mt-6 mb-6" id="team">
      <div className="container has-text-centered ">
        <h2 className="title has-text-weight-light has-text-centered has-text-primary is-1">
          Who We Are
        </h2>
        <div className="columns mt-6 is-multiline">
          <div className="column is-half-tablet is-one-third-desktop">
            <figure class="image is-128x128 is-inline-block">
              <img src={Image1} class="is-rounded" alt="" />
            </figure>
            <h1 class="title"> Jane Doe</h1>
            <p class="subtitle is-6">CEO</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              dolorum recusandae exercitationem Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <figure class="image is-128x128 is-inline-block">
              <img src={Image2} class="is-rounded" alt="" />
            </figure>
            <h1 class="title"> John Doe</h1>
            <p class="subtitle is-6">CEO</p>
            <p>
              Facilis dolorum recusandae exercitationem. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Facilis dolorum recusandae
              exercitationem.
            </p>
          </div>
          <div className="column is-half-tablet is-one-third-desktop">
            <figure class="image is-128x128 is-inline-block">
              <img src={Image3} class="is-rounded" alt="" />
            </figure>
            <h1 class="title"> Jane Doe</h1>
            <p class="subtitle is-6">CEO</p>
            <p>
              Adipisicing elit. Facilis dolorum recusandaeLorem ipsum dolor sit
              amet consectetur, adipisicing elit. Facilis dolorum recusandae
              exercitationem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
