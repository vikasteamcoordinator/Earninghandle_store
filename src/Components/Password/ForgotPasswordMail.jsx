import React, { useState } from "react";
import "./ForgotPassword.css";
import { IoMailOutline } from "react-icons/io5";
import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const ForgotPasswordMail = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [usePhone, setUsePhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    if ((usePhone && phone) || (!usePhone && email)) {
      setStep(2);
    }
  };

  const handleConfirmOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setStep(3);
    }
  };

  const handleResetPassword = () => {
    onClose();
    if (password && confirmPassword && password === confirmPassword) {
      toast.warning("Password reset successful");
    }
  };

  return (
    <div className="popup-overlay-fp">
      <div className="popup-box-fp">
        <button className="close-btn-fp" onClick={onClose}>
          ×
        </button>

        {step === 1 && (
          <div className="popup-content-fp">
            <h3>Forgot Password</h3>

            <div className="input-group-fp">
              {usePhone ? (
                <FaPhoneAlt className="input-icon-fp" />
              ) : (
                <IoMailOutline className="input-icon-fp" />
              )}
              <input
                type={usePhone ? "number" : "email"}
                placeholder={
                  usePhone ? "Enter your phone number" : "Enter your email"
                }
                value={usePhone ? phone : email}
                className="form-control mb-0 bg-transparent single-input-fp"
                onChange={(e) =>
                  usePhone ? setPhone(e.target.value) : setEmail(e.target.value)
                }
              />
            </div>

            <button
              className="send-otp-button-fp btn-fp login-btn-fp text-uppercase input-bottom-shadow-fp"
              onClick={handleSubmit}
            >
              Next
            </button>

            <button
              className="toggle-method-fp"
              onClick={() => setUsePhone(!usePhone)}
            >
              Try another way
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="popup-content-fp">
            <h3>Enter OTP</h3>
            <div className="otp-container-fp">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <button
              className="send-otp-button-fp btn-fp login-btn-fp text-uppercase input-bottom-shadow-fp"
              onClick={handleConfirmOtp}
            >
              Confirm OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="popup-content-fp">
            <h3>Reset Password</h3>

            <div className="input-group-fp">
              <FaLock className="input-icon-fp" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-0 bg-transparent single-input-fp"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon-fp"
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-group-fp">
              <FaLock className="input-icon-fp" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                className="form-control mb-0 bg-transparent single-input-fp"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-icon-fp"
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              className="send-otp-button-fp btn-fp login-btn-fp text-uppercase input-bottom-shadow-fp"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordMail;
