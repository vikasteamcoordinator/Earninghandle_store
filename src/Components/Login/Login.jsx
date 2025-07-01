import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {
  IoChevronBack,
  IoCheckmarkDoneOutline,
  IoMailOutline,
} from "react-icons/io5";
import img from "../../Assets/auth/loginbg.png";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import ForgotPasswordMail from "../Password/ForgotPasswordMail";

const Login = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isPhoneLogin, setIsPhoneLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleBackClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next only if input is filled
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    const { key } = e;

    if (key === "Backspace") {
      e.preventDefault(); // Prevent default behavior

      const newOtp = [...otp];

      if (otp[index]) {
        // If current box has a digit, clear it
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If empty, move focus to previous
        newOtp[index - 1] = "";
        setOtp(newOtp);
        const prevInput = e.target.previousSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  return (
    <div className={`fade ${fadeOut ? "out" : ""} outer-auth`}>
      <div className="register-card">
        <button className="back-button" onClick={handleBackClick}>
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
            style={{ padding: "10px 50px" }}
          >
            <h1>Login</h1>
            <p>Enter your credentials to access your account</p>

            {!isPhoneLogin && (
              <>
                <div className="input-group">
                  <IoMailOutline className="input-icon" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control mb-2"
                  />
                </div>

                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="form-control"
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {showPopup && (
                  <ForgotPasswordMail onClose={() => setShowPopup(false)} />
                )}
              </>
            )}

            {isPhoneLogin && !otpSent && (
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control mb-2"
                />
              </div>
            )}

            {isPhoneLogin && otpSent && (
              <div className="otp-container-ls">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-box-ls"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  />
                ))}
              </div>
            )}

            {!isPhoneLogin && (
              <div className="d-flex justify-content-between align-items-center col-12 col-md-9">
                <div className="d-flex gap-2 terms">
                  <input
                    type="checkbox"
                    id="remember"
                    className="custom-checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label htmlFor="remember" style={{ cursor: "help" }}>
                    <span
                      className="custom-icon"
                      style={{ cursor: "pointer", marginRight: "8px" }}
                    >
                      {isChecked && <IoCheckmarkDoneOutline />}
                    </span>
                    Remember Me
                  </label>
                </div>
                <div
                  className="text-end"
                  onClick={() => setShowPopup(true)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="m-0">Forgot Password?</p>
                </div>
              </div>
            )}

            <div className="d-flex w-100 mt-4 mb-5">
              <div className="ms-auto">
                <div
                  className="login-btn-ls px-5"
                  onClick={() => {
                    if (isPhoneLogin && !otpSent) {
                      setOtpSent(true);
                    } else {
                      handleBackClick()
                    }
                  }}
                >
                  {isPhoneLogin
                    ? otpSent
                      ? "Verify OTP"
                      : "Send OTP"
                    : "Login"}
                </div>
              </div>
            </div>

            <div className="login-options-ls">
              {!isPhoneLogin ? (
                <div
                  className="login-btn-ls"
                  onClick={() => {
                    setIsPhoneLogin(true);
                    setOtpSent(false);
                  }}
                >
                  Login With <span className="number-ls">Number</span>
                </div>
              ) : (
                <div
                  className="login-btn-ls"
                  onClick={() => {
                    setIsPhoneLogin(false);
                    setOtpSent(false);
                  }}
                >
                  Login With <span className="google-ls">Email</span>
                </div>
              )}

              <span className="or-ls">OR</span>

              <div className="login-btn-ls">
                Login With <span className="google-ls">Google</span>
              </div>
              <span className="or-ls">OR</span>
              <div
                className="login-btn-ls"
                onClick={() => onSwitch("register")}
              >
                Create Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
