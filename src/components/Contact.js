import React from "react";

function Contact() {
  return (
    <section className="section has-background-primary" id="contact">
      <div className="container has-text-centered">
        <h2 className="title has-text-weight-light has-text-centered has-text-white is-1">
          Get a Quote
        </h2>
        <div className="column is-8 is-offset-2">
          <form action="">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Your Name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user fa-xs"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="email"
                  placeholder="Your Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope fa-xs"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>

            <button class="button is-danger is-medium">Success</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
