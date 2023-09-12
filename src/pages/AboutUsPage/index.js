import React from "react";
import FooterComponent from "../../components/FooterComponent";
import { Col, Row } from "react-bootstrap";

import Study from "../../assets/images/BannerImages/GolryEnglishSchoolBhiwandi-5.JPG";

import Certificate1 from "../../assets/images/Certificate/certificate-1.jpg";
import Certificate2 from "../../assets/images/Certificate/1.jpg";
import Certificate3 from "../../assets/images/Certificate/certificate-3.jpg";
import Certificate4 from "../../assets/images/Certificate/certificate-4.jpg";
import OurSkillsComponent from "../../components/OurSkillsComponent";

const AboutUsPage = () => {
  return (
    <>
      <div className="article">
        <Row>
          <Col md={12} className="p-0">
            <div className="about-banner">
              <div className="container w-100 h-100">
                <div className="about-title z-2 w-100 h-100 d-flex flex-column justify-content-center">
                  <h2>About Us</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>-
                    </li>

                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="container mt-5">
          <Row>
            <Col md={12} lg={12} xl={6}>
              <div className="what-type">
                <h2>Who We Are</h2>
                <h4> Established in 1989 in Bhiwandi, India</h4>
                <p>
                  At Glory English High School, our journey of educational
                  excellence began in 1989 in the vibrant city of Bhiwandi. With
                  a rich history spanning over three decades, we have dedicated
                  ourselves to providing quality education and nurturing the
                  minds of countless students.
                </p>
              </div>
              <div className="what-type mt-5">
                <h2>Our Mission</h2>
                <p>
                  Over the years, we have established a tradition of academic
                  excellence, fostering holistic development, and nurturing a
                  love for learning. Our dedicated faculty, state-of-the-art
                  facilities, and innovative teaching methods contribute to our
                  continued success.
                </p>
              </div>
              <div className="what-type mt-5">
                <h2>A Tradition of Excellence</h2>
                <p>
                  Our mission is simple yet profound: to empower students with
                  knowledge, instill values, and inspire them to reach their
                  full potential. We believe that every child is unique, and our
                  commitment is to create an inclusive and nurturing environment
                  where they can thrive academically, socially, and personally.
                </p>
              </div>
            </Col>
            <Col md={12} lg={12} xl={6}>
              <div className="what-study-image">
                <img src={Study} alt="" />
              </div>
            </Col>
          </Row>

          {/* <div className="certificate mt-5 pt-3">
            <Row>
              <Col sm={6} md={6} lg={6} xl={3}>
                <div className="certificate-image">
                  <img src={Certificate1} alt="" />
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} xl={3}>
                <div className="certificate-image">
                  <img src={Certificate2} alt="" />
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} xl={3}>
                <div className="certificate-image">
                  <img src={Certificate3} alt="" />
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} xl={3}>
                <div className="certificate-image">
                  <img src={Certificate4} alt="" />
                </div>
              </Col>
            </Row>
          </div> */}

          <div className="our-skill-lecture-part">
            <OurSkillsComponent></OurSkillsComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
