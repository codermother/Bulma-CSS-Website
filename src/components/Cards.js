import React from "react";

function Cards() {
  return (
    <div className="section ">
      <div className="container mt-5 mb-5">
        <h2 className="title has-text-weight-light has-text-centered has-text-primary is-1">
          Our Features
        </h2>
        <div className="columns">
          <div className="column">
            <div className="card is-shadowless">
              <div className="card-content has-text-centered">
                <div className="content">
                  <span className="icon is-large has-text-primary">
                    <span className="fa-stack">
                      <i className="fa fa-terminal fa-2x"></i>
                    </span>
                  </span>
                  <p className="title is-4 has-text-weight-light has-text-primary">
                    Library
                  </p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore officiis rem nulla, repellat pariatur vitae iusto
                    voluptate numquam quaerat ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card is-shadowless">
              <div className="card-content has-text-centered">
                <div className="content">
                  <span className="icon is-large has-text-primary">
                    <span className="fa-stack">
                      <i className="fa fa-edit fa-2x"></i>
                    </span>
                  </span>
                  <p className="title is-4 has-text-weight-light has-text-primary">
                    Egalite
                  </p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis eius maiores ipsum repellat doloribus sed Lorem
                    ipsum dolor sit amet..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card is-shadowless">
              <div className="card-content has-text-centered">
                <div className="content">
                  <span className="icon is-large has-text-primary">
                    <span className="fa-stack">
                      <i className="fa fa-layer-group fa-2x"></i>
                    </span>
                  </span>
                  <p className="title is-4 has-text-weight-light has-text-primary">
                    Fraternite
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquam quibusdam, ipsam architecto iste alias dolorem unde
                    quae architecto iste alias ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
