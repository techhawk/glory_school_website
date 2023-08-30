import {
  faCopyright,
  faEnvelope,
  faLocation,
  faMailBulk,
  faMap,
  faMapLocation,
  faMapMarker,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactUsPage = () => {
  return (
    <>
      <div className="contact-container overflow-hidden">
        <Row>
          <Col md={12} className="p-0">
            <div className="contact-banner">
              <div className="container w-100 h-100">
                <div className="contact-title z-2 w-100 h-100 d-flex flex-column justify-content-center">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>-
                    </li>

                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="container mt=5 pt-5 mb-5">
          <Row>
            <Col md={4} className="">
              <div className="school-info">
                <div className="head-title mb-5">
                  <h2>Information</h2>
                </div>
                <div className="address mb-4">
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    className="color-yellow fs-3"
                  />

                  <span>
                    73JC+R2W, KGN Chowk Rd, Nai Basti, Padma Nagar, Bhiwandi,
                    Maharashtra 421302
                  </span>
                </div>
                <div className="cell mb-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="color-yellow fs-3"
                  />
                  <span>
                  <a href="tel:+91 99601 55518">+91 99601 55518</a>
                  </span>

                </div>
                <div className="mail">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="color-yellow fs-3"
                  />
                  <span><a href="mailto:gloryschoolapp@gmail.com">gloryschoolapp@gmail.com</a></span>
                </div>
              </div>
            </Col>
            <Col md={8} className="">
              <div className="contact-with-us">
                <div className="head-title mb-5">
                  <h2>Contact With Us</h2>
                </div>
                <Row>
                  <div className="contact-form">
                    <Col md={6}>
                      <div className="form-field mb-5 w-100">
                        <input
                          type="name"
                          name=""
                          className="w-100 h-100"
                          id=""
                          placeholder="Name*"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-field mb-5 w-100">
                        <input
                          type="email"
                          name=""
                          className="w-100 h-100"
                          id=""
                          placeholder="Email*"
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="msg-field mb-5 ">
                        <textarea
                          name="Message"
                          className="w-100 h-100"
                          placeholder="Message*"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="add-btn d-flex w-100 mt-4 mb-5">
                        <button>SEND MESSAGE</button>
                      </div>
                    </Col>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="school-map">
          <Row>
            <Col md={12}>
              <div className="google-map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0056168522883!2d73.06750547532063!3d19.282121945469086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd9c0272cef5%3A0xb8fcf9ecb57fdfbc!2sGlory%20English%20High%20School!5e0!3m2!1sen!2sin!4v1692006629729!5m2!1sen!2sin"

                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
