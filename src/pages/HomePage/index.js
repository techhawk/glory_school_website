import React, { useState } from "react";
import BannerOne from "../../assets/images/BannerImages/Banner One.jpg";
import BannerTwo from "../../assets/images/BannerImages/Banner Two.jpg";
import BannerThree from "../../assets/images/BannerImages/Banner three.jpg";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="home-content">
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
                  Aliquam, vero? Architecto optio libero cumque consectetur unde
                  cum a. Nam commodi qui corporis tempore iure fuga amet
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
      </div>
    </>
  );
};

export default HomePage;
