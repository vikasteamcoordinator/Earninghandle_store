import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoCheckmarkDoneOutline,
  IoCallOutline,
  IoLogoGoogle,
  IoMailOutline,
} from "react-icons/io5";
import img from "../../Assets/auth/loginbg.png";
import "./RegisterForm.css";

const Register = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const popupContainerStyles = {
    zIndex: 10,
    opacity: showTooltip ? 1 : 0,
    top: "50%",
    left: "35%",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const tooltipStyles = {
    fontSize: "16px",
    fontWeight: "normal",
    position: "relative",
  };

  const popupTextStyles = {
    position: "absolute",
    top: "24px",
    left: "16px",
    right: "16px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "normal",
    padding: "20px",
    textAlign: "left",
    lineHeight: "1.4",
  };

  return (
    <div className="container outer-auth">
        <button className="back-button" onClick={() => onSwitch("login")}>
          Back
        </button>
      <div className="register-card">
        <div className="register-content">
            <div className="col-md-5 register-image-section">
              <div className="background-image-wrapper d-none d-md-block">
                <img
                  src={img}
                  alt="Illustration"
                  className="register-illustration w-100 ms-5 mt-3"
                />
              </div>
            </div>

          <div className="col-md-7 register-form-section">
            <h1>Register now as an Affiliate!</h1>
            <p>Enter your information to setup a new account</p>

            <div className="form-row input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="First Name"
                className="form-control bg-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control bg-transparent"
              />
            </div>

            <div className="form-row input-group">
              <div className="phone-input">
                <IoMailOutline className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="form-control bg-transparent border-0"
                />
                <button className="verify-button">Verify</button>
              </div>
            </div>

            <div className="form-row input-group">
              <IoCallOutline className="input-icon" />
              <div className="phone-input">
                <span className="country-code">🇮🇳 +91</span>
                <input
                  type="tel"
                  placeholder="Enter your phone no."
                  className="form-control border-0 bg-transparent"
                />
                <button className="verify-button">Verify</button>
              </div>
            </div>

            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Username"
                className="form-control bg-transparent single-input"
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control bg-transparent single-input"
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Repeat Password"
                className="form-control bg-transparent single-input"
              />
              <span
                className="password-toggle"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              >
                {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div>
              <div style={tooltipStyles} className="desktop-only">
                <div
                  className="tooltip bg-transparent"
                  style={popupContainerStyles}
                >
                  <svg
                    width="400"
                    height="230"
                    viewBox="0 0 400 230"
                    style={{
                      filter: "drop-shadow(0 9px 16px rgba(0, 0, 0, 0.16))",
                    }}
                  >
                    <path
                      d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeDasharray="1000"
                      strokeDashoffset={showTooltip ? "400" : "1000"}
                      style={{
                        transition:
                          "stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />

                    <path
                      d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                      fill="#00000"
                      style={{
                        transform: showTooltip ? "scale(1)" : "scale(0)",
                        transformOrigin: "center",
                        transition:
                          "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </svg>

                  <div className="p-4" style={popupTextStyles}>
                    Please read terms and conditions before
                    <br />
                    Registration
                  </div>
                </div>
              </div>
              <div className="terms">
                <input
                  type="checkbox"
                  id="terms"
                  style={{ cursor: "pointer" }}
                  className="custom-checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="terms"
                  style={{ cursor: "help", fontSize: "0.8em" }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setShowTooltip(false), 500);
                  }}
                >
                  <span className="custom-icon" style={{ cursor: "pointer" }}>
                    {isChecked && <IoCheckmarkDoneOutline />}
                  </span>
                  Terms & Condition
                </label>
              </div>
              <div className="terms">
                <input
                  type="checkbox"
                  id="age"
                  style={{ cursor: "pointer" }}
                  className="custom-checkbox"
                  checked={isAgeChecked}
                  onChange={() => setIsAgeChecked(!isAgeChecked)}
                />
                <label
                  htmlFor="age"
                  style={{ cursor: "help", fontSize: "0.8em" }}
                >
                  <span className="custom-icon" style={{ cursor: "pointer" }}>
                    {isAgeChecked && <IoCheckmarkDoneOutline />}
                  </span>
                  I confirm that I am 18 years or older
                </label>
              </div>
            </div>

            <div className="row w-md-75 bot mt-4">
              <div className="col-md-6 text-center">
                <div
                  onClick={() => onSwitch("login")}
                  style={{ cursor: "pointer" }}
                  className="animated-icon-link gap-0 hover1"
                >
                  <IoLogoGoogle className="icon icon-rotate-google p-0 m-0" style={{ fontSize: "2rem" }} />
                  <span className="text">oogle</span>
                </div>
              </div>
              <p>OR</p>
              <div className="col-lg-6 ">
                <button
                  onClick={() => onSwitch("login")}
                  className="create-account text-uppercase input-bottom-shadow"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
