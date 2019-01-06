import React, { Component } from 'react';
import WrappedContactForm from "../ContactForm";
import ContactItems from "../ContactItems";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="title-bar">
            <h1 className="title">Contact</h1>
          </div>
          <div className="section-body">
            <h2>Want to get in touch?</h2>
            <div className="contact-body">
              <WrappedContactForm />
              <ContactItems />
            </div>

          </div>
          <div className="hr-line"></div>
          <div className="hr-line" style={{ margin: "0 auto 10%" }}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Contact;
