import React from "react";

import { Col, Row } from "react-bootstrap";


import Glorylogo from '../../assets/images/svg/glory-logo.jpg'
import Facebook from '../../assets/images/svg/social/facebook.svg'
import Instagram from '../../assets/images/svg/social/instagram.svg'
import Twitter from '../../assets/images/svg/social/twitter.svg'
import Pinterest from '../../assets/images/svg/social/pinterest.svg'
import Linkdin from '../../assets/images/svg/social/linkedin.svg'
import Whatsapp from '../../assets/images/svg/social/whatsapp.svg'

import Phone from '../../assets/images/svg/call-svgrepo-com.svg'
import Message from '../../assets/images/svg/message-svgrepo-com.svg'
import Send from "../../assets/images/svg/send-message-dm-svgrepo-com (1).svg"

import flicks1 from '../../assets/images/Flicks-photo/image-1.jpg'
import flicks2 from '../../assets/images/Flicks-photo/image-2.jpg'
import flicks3 from '../../assets/images/Flicks-photo/image-3.jpg'
import flicks4 from '../../assets/images/Flicks-photo/image-4.jpg'
import flicks5 from '../../assets/images/Flicks-photo/image-5.jpg'
import flicks6 from '../../assets/images/Flicks-photo/image-6.jpg'

import payment1 from '../../assets/images/payement/payment-method1.jpg'
import payment2 from '../../assets/images/payement/payment-method2.jpg'
import payment3 from '../../assets/images/payement/payment-method3.jpg'
import payment4 from '../../assets/images/payement/payment-method4.jpg'


const FooterComponent = () => {


    return (
        <>
           <div className="footer-part  pb-5">
            <div className="container pb-5 pt-5">
                <Row>
                    <Col md={6}  lg={6} xl={3} >
                        <div className="academics-details">
                            <div className="head-academics mt-3">
                                <img src={Glorylogo} alt="" />
                                <h2 className="fw-bold">ACADEMICS</h2>
                            </div>
                            <div className="academics-info mt-3">
                                <p>Praesent vel rutrum purus. Nam vel dui eu sus duis dignissim dignissim. Suspenetey disse at ros tecongueconsequat.Fusce sit amet rna feugiat.</p>
                            </div>
                            <div className="socail-contact-footer mt-5">
                                <img src={Facebook} alt="" />
                                <img src={Instagram} alt="" />
                                <img src={Twitter} alt="" />
                                <img src={Pinterest} alt="" />
                                <img src={Linkdin} alt="" />
                                <img src={Whatsapp} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3}>
                        <div className="featured-details">
                            <div className="head-featured mt-3">
                                <h2>Featured Links</h2>
                            </div>
                            <div className="featured-all-link mt-3">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="/privacypolicy">Privacy Policy</a></li>
                                    <li><a href="term">Term & Condition</a></li>
                                </ul>
                                {/* <ul className="ms-5">
                                    <li><a href="">Courses</a></li>
                                    <li><a href="">abouts</a></li>
                                    <li><a href="">Book store</a></li>
                                    <li><a href="">alumni</a></li>
                                </ul> */}
                            </div>
                           
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3}>
                        <div className="information-details mt-3">
                            <div className="head-info">
                                <h2>Information</h2>
                            </div>
                            <div className="info-call-email">
                                <div className="info-phone">
                                    <img src={Phone} alt="" />
                                    <a href="tel:+91 99601 55518">+91 99601 55518</a>
                                </div>
                                <div className="info-msg">
                                    <img src={Message} alt="" />
                                    <a href="mailto:gloryschoolapp@gmail.com">gloryschoolapp@gmail.com</a>
                                </div>
                            </div>
                            <div className="new-letter-info mt-4">
                                <h4>NEWSLETTER</h4>
                                <div className="enter-email-info">
                                   <input type="text" placeholder="enter your e-mail here"/>
                                   <button><img src={Send} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={3}>
                        <div className="flicks-photo-details mt-3">
                            <h2>Flicks Photo</h2>
                            <Row className="mt-3">
                                <Col xs={4} sm={4} md={4} xl={4}>
                                    <div className="flicks-image">
                                        <img src={flicks1} alt="" />
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4}  xl={4}>
                                     <div className="flicks-image">
                                        <img src={flicks2} alt="" />
                                    </div></Col>
                                <Col xs={4}  sm={4} md={4} xl={4}>
                                <div className="flicks-image">
                                        <img src={flicks3} alt="" />
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4}  xl={4}>
                                <div className="flicks-image">
                                        <img src={flicks4} alt="" />
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4}  xl={4}>
                                <div className="flicks-image">
                                        <img src={flicks5} alt="" />
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4}  xl={4}>
                                <div className="flicks-image">
                                        <img src={flicks6} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
            </div>
            
            </div>

             <div className="footer-bottom">
             <div className="container">
                <div className="reversed-part">
             <div className="design-by mt-2">
                <p>© 2017 Academics All Rights Reserved.   Designed By <a href="">Radius Theme</a> </p>
                </div>
                {/* <div className="online-card">
                    <img src={payment1} alt="" />
                    <img src={payment2} alt="" />
                    <img src={payment3} alt="" />
                    <img src={payment4} alt="" />
                </div> */}
                </div>
            </div>
                
             </div>

       
        </>
    )
};



export default FooterComponent