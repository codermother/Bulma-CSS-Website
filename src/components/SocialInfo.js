import React from "react";

function SocialInfo() {
  return (
    <div className="section has-background-danger has-text-white">
      <div className="container">
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <i className="fas fa-layer-group fa-2x"></i>
              <p className="title has-text-white has-text-weight-light is-2">
                3,456
              </p>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <i className="fas fa-users fa-2x"></i>
              <p className="title has-text-white has-text-weight-light is-2">
                568
              </p>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <i className="fas fa-layer-group fa-2x"></i>
              <p className="title has-text-white has-text-weight-light is-2">
                518K
              </p>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <i className="far fa-thumbs-up fa-2x"></i>
              <p className="title has-text-white has-text-weight-light is-2">
                4598
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SocialInfo;
