import React from "react";
import Tile1 from "../images/tile1.jpg";
import MiddleTile from "../images/middleTile.jpg";
import WildTile from "../images/wildTile.jpg";
import TallTile from "../images/tallTile.jpg";

function Tiles() {
  return (
    <div className="section mt-6  has-background-primary" id="products">
      <div className="container mb-6">
        <div className="title has-text-weight-light has-text-centered has-text-white is-1 mb-6">
          What we did
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-vertical is-parent">
                <article className="tile is-child notification is-primary is-paddingless">
                  <figure className="image">
                    <img src={Tile1} alt="" />
                  </figure>
                </article>
                <article className="tile is-child notification is-warning p-auto">
                  Click Images for details
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-primary is-paddingless">
                  <figure className="image">
                    <img src={MiddleTile} alt="" />
                  </figure>
                </article>
              </div>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification is-primary is-paddingless">
                <figure className="image">
                  <img src={WildTile} alt="" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-vertical is-4">
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary is-paddingless">
                <figure className="image">
                  <img src={TallTile} alt="" />
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiles;
