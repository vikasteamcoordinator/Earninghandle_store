import React, { useState } from "react";
import "./account.css";

import userImg from "../../Assets/Users/user2.jpeg";
import logoImg from "../../Assets/earning-white.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Account = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Profile:", formData);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contact: "",
      city: "",
      pincode: "",
    });
  };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Password Change Submitted:", {
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    console.log("Shipping Info:", {
      firstName,
      lastName,
      email,
      address,
      contactNumber,
      city,
      pincode,
    });
  };

  return (
    <>
      <div className="header-ch">
        <div className="container-ch">
          <h1 className="title-ch">{activeTab}</h1>
        </div>
      </div>
      <div className="profile-header-ph container">
        <div className="left-ph">
          <img src={userImg} alt="User" className="user-img-ph" />
          <div className="user-info-ph">
            <h3 className="name-ph">Prabhjot Singh</h3>
            <p className="email-ph">juneja@gmail.com</p>
          </div>
        </div>
        <div className="right-ph">
          <img src={logoImg} alt="Logo" className="logo-img-ph" />
        </div>
      </div>
      <div className="productAdditionalInfo">
        <div className="productAdditonalInfoContainer">
          <div className="productAdditionalInfoTabs">
            <div className="aiTabs">
              <p
                onClick={() => handleTabClick("Profile")}
                className={activeTab === "Profile" ? "aiActive" : ""}
              >
                Profile
              </p>
              <p
                onClick={() => handleTabClick("Change Password")}
                className={activeTab === "Change Password" ? "aiActive" : ""}
              >
                Change Password
              </p>
              <p
                onClick={() => handleTabClick("Address")}
                className={activeTab === "Address" ? "aiActive" : ""}
              >
                Address
              </p>
            </div>
          </div>
          <div className="productAdditionalInfoContent">
            {activeTab === "Profile" && (
              <div className="aiTabDescription">
                <form className="form-pf" onSubmit={handleSubmit}>
                  <div className="row-pf">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input-pf"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input-pf"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-pf full-pf"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input-pf full-pf"
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="input-pf full-pf"
                  />
                  <div className="row-pf">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="input-pf"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pin code"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="input-pf"
                    />
                  </div>
                  <div className="actions-pf">
                    <button
                      type="button"
                      className="cancel-pf"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="save-pf">
                      <strong>Save</strong> Profile
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "Change Password" && (
              <div className="aiTabAdditionalInfo">
                <form className="form-cp" onSubmit={handleUpdate}>
                  <div className="input-group-cp">
                    <input
                      type={showPassword.current ? "text" : "password"}
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="input-cp"
                      required
                    />
                    <span
                      className="eye-icon-cp"
                      onClick={() => toggleVisibility("current")}
                    >
                      {showPassword.current ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div className="input-group-cp">
                    <input
                      type={showPassword.new ? "text" : "password"}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="input-cp"
                      required
                    />
                    <span
                      className="eye-icon-cp"
                      onClick={() => toggleVisibility("new")}
                    >
                      {showPassword.new ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div className="input-group-cp">
                    <input
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input-cp"
                      required
                    />
                    <span
                      className="eye-icon-cp"
                      onClick={() => toggleVisibility("confirm")}
                    >
                      {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div className="actions-cp">
                    <button type="button" className="cancel-cp">
                      Cancel
                    </button>
                    <button type="submit" className="save-cp">
                      <strong>Update</strong> Password
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "Address" && (
              <div className="aiTabReview">
                <form className="form-sa" onSubmit={handleSubmit}>
                  <div className="form-row-sa">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input-sa"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input-sa"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-sa"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-sa"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="input-sa"
                    required
                  />

                  <div className="form-row-sa">
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="input-sa"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Pin code"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="input-sa"
                      required
                    />
                  </div>

                  <div className="actions-sa">
                    <button type="button" className="cancel-sa">
                      Cancel
                    </button>
                    <button type="submit" className="save-sa">
                      <strong>Save</strong> Address
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
