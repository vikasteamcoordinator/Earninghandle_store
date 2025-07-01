import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoCheckmarkDoneOutline,
  IoCallOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoChevronBack,
} from "react-icons/io5";
import img from "../../Assets/auth/regBG.png";
import "./RegisterForm.css";

const Register = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="outer-auth">
      <div className="register-card">
        <button className="back-button" onClick={() => onSwitch("login")}>
          <IoChevronBack />
        </button>
        <div className="register-content">
          <div className="col-md-5 register-image-section">
            <img
              src={img}
              alt="Illustration"
              className="register-illustration"
            />
          </div>

          <div
            className="col-md-7 text-center d-flex flex-column align-items-center justify-content-center padding-class"
            style={{ padding: "20px 50px" }}
          >
            <h1>Register now!</h1>
            <p>Enter your information to setup a new account</p>

            <div className="form-row input-group mb-2">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
              />
            </div>

            <div className="form-row input-group mb-2">
              <IoMailOutline className="input-icon" />
              <input
                type="email"
                placeholder="Enter Your email"
                className="form-control border-0"
              />
            </div>

            <div className="form-row input-group mb-2">
              <IoCallOutline className="input-icon" />
              <input
                type="tel"
                placeholder="Enter your phone no."
                className="form-control border-0"
              />
            </div>

            <div className="input-group mb-2">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control single-input"
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-group mb-2 mb-0">
              <FaLock className="input-icon" />
              <input
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Repeat Password"
                className="form-control single-input"
              />
              <span
                className="password-toggle"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              >
                {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="terms align-items-start col-12 col-md-9">
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
              >
                <span className="custom-icon" style={{ cursor: "pointer" }}>
                  {isChecked && <IoCheckmarkDoneOutline />}
                </span>
                Terms & Condition
              </label>
            </div>

            <div className="login-options-ls mt-4">
              <div className="login-btn-ls" onClick={() => onSwitch("login")}>Create Account</div>
              <span className="or-ls">OR</span>
              <div className="login-btn-ls">
                Sign Up With <span className="google-ls">Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
