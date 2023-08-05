import React from "react";
import "./about.css";
import CrissFood from "../../assets/CrisFood.svg";

const AboutUsPage = () => {
  return (
    <>
      <div className="crissfood">
        <div className="login-card">
          <div className="heading">
            <img src={CrissFood} alt="" />
          </div>
          <div className="log-in">
            <div className="login-content">
              <h2>Login to your account</h2>
              <div className="for-mail">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Your Name" />
              </div>
              <div className="for-code">
                <label htmlFor="">
                  <span>Password</span>
                  <span className="forgot"><a href="#">Forgot ?</a></span>
                </label>
                <input type="password" placeholder="Enter Your Password" />
              </div>
              <div className="login-btn">
                <button>Login now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
