import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoCheckmarkDoneOutline,
  IoCallOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoCall,
} from "react-icons/io5";
import img from "../../Assets/auth/loginbg.png";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
// import ForgotPasswordMail from "../Password/ForgotPasswordMail";

const LoginNew = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const popupContainerStyles = {
    zIndex: 10,
    opacity: showTooltip ? 1 : 0,
    top: "25%",
    left: "40%",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const tooltipStyles = {
    fontSize: "16px",
    fontWeight: "normal",
    position: "relative",
  };

  const popupTextStyles = {
    position: "absolute",
    top: "48px",
    left: "16px",
    right: "16px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "normal",
    padding: "20px",
    textAlign: "left",
    lineHeight: "1.4",
  };

  const handleBackClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className={`fade ${fadeOut ? "out" : ""} container outer-auth`}>
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      <div className="register-card  ">
        <div className="register-content">
          <div className="col-md-6 register-image-section">
            <img
              src={img}
              alt="Illustration"
              className="register-illustration "
            />
          </div>
          <div
            className="col-md-6 text-center padding-class"
            style={{
              padding: "10px 100px",
            }}
          >
            <h1>Login</h1>
            <p>Enter your credentials to access your account</p>

            {/* Email or Username Field */}
            <div className="input-group">
              <IoMailOutline className="input-icon" />
              <input
                type="text"
                placeholder="Email or Username"
                className="form-control mb-2 bg-transparent single-input"
              />
            </div>

            {/* Password Field */}
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

            <div style={tooltipStyles} className="desktop-only">
              <div
                className="tooltip bg-transparent"
                style={popupContainerStyles}
              >
                <svg
                  width="300"
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
                  Stay logged in on this device
                  {/* <br />
                  Signing In */}
                </div>
              </div>
            </div>

            <div className="row  justify-content-between">
              <div className="terms col-auto">
                <input
                  type="checkbox"
                  id="remember"
                  className="custom-checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="remember"
                  style={{ cursor: "help" }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setShowTooltip(false), 500);
                  }}
                >
                  <span className="custom-icon" style={{ cursor: "pointer" }}>
                    {isChecked && <IoCheckmarkDoneOutline />}
                  </span>
                  Remember Me
                </label>
              </div>
              <div
                className="col-auto"
                onClick={() => setShowPopup(true)}
                style={{ cursor: "help" }}
              >
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className="d-flex align-content-center justify-content-md-start justify-content-start mt-0 mt-md-5">
              <button
                type="submit"
                className="btn login-btn text-uppercase input-bottom-shadow"
              >
                Login
              </button>
            </div>

            {/* {showPopup && (
              <ForgotPasswordMail onClose={() => setShowPopup(false)} />
            )} */}

            <div className="text-center  mt-3 mt-md-0 ">
              <p className="mb-0 mb-md-5">Or Login With</p>
            </div>

            <div className="bottom-options  d-flex justify-content-center gap-5 align-items-center">
              <div
                onClick={() => onSwitch("phone")}
                style={{ cursor: "pointer" }}
                className="animated-icon-link gap-0 overflow-hidden  hover"
              >
                <IoCall
                  className="icon icon-rotate"
                  style={{ fontSize: "2rem" }}
                />
                <span className="text overflow-hidden">Phone Number</span>
              </div>

              <div
                onClick={() => onSwitch("phone")}
                style={{ cursor: "pointer" }}
                className="animated-icon-link gap-0 hover1"
              >
                <IoLogoGoogle
                  className="icon  p-0 m-0 icon-rotate-google"
                  style={{ fontSize: "2rem" }}
                />
                <span className="text p-0 m-0">oogle</span>
              </div>
            </div>
            <div
              onClick={() => onSwitch("register")}
              style={{ fontSize: "1rem", cursor: "pointer" }}
              className="text-dark pt-4"
            >
              Create an account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNew;
