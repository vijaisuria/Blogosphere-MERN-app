import React from "react";
import "../css/contact.css";
import Navbar from "../partials/NavBar";
import Footer from "../partials/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div class="body">
        <section>
          <div className="section-header">
            <div className="container-cont">
              <h2>Contact Us</h2>
              <p>
                Get in touch with us for any inquiries or collaboration
                opportunities. We're here to answer your questions and provide
                assistance.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-home"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>
                      4671 Sugar Camp Road,
                      <br /> Owatonna, Minnesota, <br />
                      55060
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>571-457-2321</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>ntamerrwael@mfano.ga</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form action="" id="contact-form">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      name=""
                    />
                  </div>

                  <div className="input-box">
                    <input type="email" placeholder="Email" required name="" />
                  </div>

                  <div className="input-box">
                    <textarea required name=""></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div className="input-box">
                    <input type="submit" value="Send" name="" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
