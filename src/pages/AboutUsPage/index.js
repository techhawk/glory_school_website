import React from "react";
import FooterComponent from "../../components/FooterComponent";
import { Col, Row } from "react-bootstrap";

import Study from '../../assets/images/Flicks-photo/study.jpg'

import Certificate1 from '../../assets/images/Certificate/certificate-1.jpg'
import Certificate2 from '../../assets/images/Certificate/1.jpg'
import Certificate3 from '../../assets/images/Certificate/certificate-3.jpg'
import Certificate4 from '../../assets/images/Certificate/certificate-4.jpg'
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
            <Col md ={6}>
                <div className="what-type">
                    <h2>Who We Are</h2>
                    <p>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theindustry's standard dummy text ever since simply dummy text of the printing and etypesetting industry. Lorem Ipsum has been the induststandard dummy text ever since en an unknown printer took a galley of type scrambledmaining.</p>
                </div>
                <div className="what-type mt-5">
                    <h2>What We do</h2>
                    <p>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theindustry's standard dummy text ever since simply dummy text of the printing and etypesetting industry. Lorem Ipsum has been the induststandard dummy text ever since en an unknown printer took a galley of type scrambledmaining.</p>
                </div>
            </Col>
            <Col md ={6}>
                <div className="what-study-image">
                    <img src={Study} alt="" />
                </div>
            </Col>
        </Row>


         <div className="certificate mt-5 pt-3">
            <Row>
                <Col md={3}>
                    <div className="certificate-image">
                        <img src={Certificate1} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                <div className="certificate-image">
                        <img src={Certificate2} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                <div className="certificate-image">
                        <img src={Certificate3} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                <div className="certificate-image">
                        <img src={Certificate4} alt="" />
                    </div>
                </Col>
            </Row>
         </div>


             <div className="our-skill-lecture-part">
                <OurSkillsComponent></OurSkillsComponent>
             </div>
        
        </div>




     </div>


        </>
    )
};



export default AboutUsPage
