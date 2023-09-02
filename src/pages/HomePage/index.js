import React, { useState } from "react";
import BannerOne from "../../assets/images/BannerImages/GolryEnglishSchoolBhiwandi-1.JPG";
import BannerTwo from "../../assets/images/BannerImages/GolryEnglishSchoolBhiwandi-2.JPG";
import BannerThree from "../../assets/images/BannerImages/GolryEnglishSchoolBhiwandi-3.JPG";
import BannerFour from "../../assets/images/BannerImages/GolryEnglishSchoolBhiwandi-8.JPG";
import { Carousel, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="home-content overflow-hidden">
        <div className="banner-container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="banner-images">
                <img
                  src={BannerOne}
                  class="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  text="First slide"
                />
              </div>
              <Carousel.Caption>
                <div className="banner-text">
                  <h3>GLORY SCHOOL</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam, vero? Architecto optio libero cumque consectetur
                    unde cum a. Nam commodi qui corporis tempore iure fuga amet
                    veritatis dolore pariatur corrupti?
                  </p>
                  <div className="add-btn d-flex justify-content-center w-100 mt-4 mb-5">
                    <button>ADDMISSION HERE</button>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-images">
                <img
                  src={BannerTwo}
                  class="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  text="Second slide"
                />
              </div>
              <Carousel.Caption>
                <div className="banner-text">
                  <h3>GLORY SCHOOL</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    sed veritatis nam numquam necessitatibus sapiente voluptate
                    beatae, reiciendis consequatur odio quisquam corporis autem
                    nostrum quo quaerat dignissimos neque asperiores nisi.
                  </p>
                  <div className="add-btn d-flex justify-content-center w-100 mt-4 mb-5">
                    <button>ADDMISSION HERE</button>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="banner-images">
                <img
                  src={BannerThree}
                  class="d-block w-100 h-100 object-fit-cover"
                  alt=""
                  text="Third slide"
                />
              </div>
              <Carousel.Caption>
                <div className="banner-text">
                  <h3>GLORY SCHOOL</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur debitis eum blanditiis sit minus illum veniam
                    minima quasi adipisci voluptas, modi nulla animi consectetur
                    placeat inventore rerum deleniti in magni?
                  </p>
                  <div className="add-btn d-flex justify-content-center w-100 mt-4 mb-5">
                    <button>ADDMISSION HERE</button>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Row>
          <Col md={12}>
            <div className="container acadamy-info mt-5">
              <div className="heading text-center">
                <h2>Welcome to Glory English High School</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  ducimus doloribus ut quidem in magnam veniam <br /> animi sunt
                  assumenda, rem dolorem nesciunt a ipsam,
                </p>
              </div>
              <div className="acadamy-img d-flex justify-content-center mt-5">
                <img src={BannerFour} alt="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-0">
            <div className="school-video d-flex align-items-center justify-content-center mt-5 mb-5">
              <div className="video-title z-1 text-center mt-5">
                <h2>Watch School Life Video Tour</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  ducimus doloribus ut quidem in magnam veniam <br /> animi sunt
                  assumenda, rem dolorem nesciunt a ipsam,
                </p>
                <div className="play-btn d-flex justify-content-center w-100">
                  <button className="border-2 border-light rounded-circle bg-transparent">
                    <a href="http://www.youtube.com/watch?v=1iIZeIy7TqM">
                      <FontAwesomeIcon icon={faPlay} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
