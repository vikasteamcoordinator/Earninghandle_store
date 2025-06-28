import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoCheckmarkDoneOutline,
  IoCallOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoCall,
} from "react-icons/io5";
import img from "../../assets/IMG/login-number.png";
import "../Login/Login.css";

const LoginWithPhoneNo = ({ onSwitch }) => {
  return (
    <div className="container ">
      <div
        className="register-card  py-5  d-flex justify-content-center align-content-center"
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
                className="register-illustration w-75 ms-5 mt-4"
              />
            </div>
          <div className="col-lg-7 text-left  padding-class-p" style={{ padding: "40px 100px" }}>
            <h1 style={{ fontWeight: "bold" }}>Login</h1>
            <p style={{ fontSize: "0.9rem" }}>
              Enter your mobile number to access your account.
            </p>

            <div className="input-group">
              <IoCallOutline
                style={{
                  color: "#f7c472",
                }}
                className="input-icon"
              />
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="form-control bg-transparent single-input"
              />
            </div>

            <div className="d-flex justify-content-start">
              <button
                onClick={() => onSwitch("otp")}
                className="send-otp-button btn login-btn text-uppercase input-bottom-shadow "
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPhoneNo;
