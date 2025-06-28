import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoCheckmarkDoneOutline,
  IoCallOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoCall,
  IoCreateOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import img from "../../assets/IMG/otp-bg-img.png";
import "../Login/Login.css";

const LoginEnterOtp = ({ onSwitch }) => {
  return (
    <div className="container ">
      <div
        className="register-card  py-5 d-flex justify-content-center align-content-center"
        style={{ minHeight: "600px" }}
      >
        <button className="back-button" onClick={() => onSwitch("login")}>
          Back
        </button>
        <div className="register-content">
          <div className="col-lg-5 register-image-section">
              <img
                src={img}
                alt="Illustration"
                className="register-illustration w-75 mt-4 ms-5"
              />
          </div>
          <div className="col-lg-7 text-left align-items-center padding-class-p" style={{ padding: "40px 100px" }}>
            <h1 style={{ fontWeight: "bold" }}>Enter OTP!</h1>
            <p className="otp-subtext">
              Enter your 4-digit OTP sent to your registered number.
            </p>
            <div className="input-group mt-3">
              <IoLockClosedOutline className="input-icon" />
              <input
                type="text"
                maxLength={4}
                placeholder="Enter OTP"
                className="form-control bg-transparent single-input"
              />
            </div>

            <button
              onClick={() => onSwitch("login")}
              className="submit-otp-button btn login-btn text-uppercase input-bottom-shadow"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEnterOtp;
