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
              <ContactItems />
              <WrappedContactForm />
            </div>

          </div>
          <div className="hr-line"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Contact;
