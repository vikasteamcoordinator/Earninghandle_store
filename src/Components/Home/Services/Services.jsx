import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Fast And Free Delivery</h3>
          <p>Free delivery for all orders over ₹500</p>
        </div>
        <div className="serviceBox">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>24/7 Customer Support</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="serviceBox">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Easy Return Guarantee</h3>
          <p>Easy 7 day return policy</p>
        </div>
      </div>
    </>
  );
};

export default Services;
