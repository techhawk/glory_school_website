import React from "react";
import { Link } from "react-router-dom";
import SchoolLogo from "../../assets/images/png/gloryenglishhighschoolicon128.png";
import Hamburger from "../../assets/images/svg/hamburger-menu-svgrepo-com.svg";

const HeaderComponent = () => {
  return (
    <>
      <div className="main-container">
        <div className="header-content">
          <div className="container header-container align-items-center d-flex justify-content-between">
            <div className="school-logo d-flex align-items-center">
              <img src={SchoolLogo} alt="" />
              <h2>GLORY</h2>
            </div>
            <div className="navbar">
              <ul>
                <li className="active">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="primary-btn d-flex align-items-center">
              <button>APPLY NOW</button>
            </div>
          </div>
        </div>
        
          <div className="responsive-header">
            <div className="school-logo resp-head d-flex align-items-center">
              <img src={SchoolLogo} alt="" />
              <h2>GLORY</h2>
            </div>
            <div className="hamburger">
              <img src={Hamburger} alt="" />
            </div>
          </div>
      </div>
    </>
  );
};

export default HeaderComponent;
