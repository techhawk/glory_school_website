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
                    We believe in the transformative power of education and its
                    ability to shape a brighter future for our students.
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
                    We uphold the highest standards of integrity, ethics, and
                    honesty in all our interactions.
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
                    We embrace diversity and inclusivity, ensuring that every
                    student feels valued and supported.
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
                  At Glory English High School, our journey of educational
                  excellence began in 1989 in the vibrant city of Bhiwandi. With
                  a rich history spanning over three decades, we have dedicated
                  ourselves to providing quality education and nurturing the
                  minds of countless students.
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
                  We believe in the importance of a strong partnership between
                  parents and teachers. Open communication and active
                  <br />
                  involvement of parents are integral to a student's success,
                  and we cherish this collaborative spirit.
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
