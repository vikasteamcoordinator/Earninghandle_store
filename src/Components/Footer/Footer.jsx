import React from "react";
import "./Footer.css";
import logo from "../../Assets/earning-white.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-follow">
        <img src={logo} alt="" width="125px" />
        <h3>Follow</h3>
        <ul className="social-icons">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>User Area</h3>
          <ul onClick={scrollToTop}>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/cart">My Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/auth">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Shopping Guide</h3>
          <ul onClick={scrollToTop}>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/return-policy">Return Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Others</h3>
          <ul onClick={scrollToTop}>
            <li>
              <Link to="/account">Profile</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/return-policy">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-contact">
        <h3>Contact Details</h3>
        <ul>
          <li>
            <MdLocationOn /> 252 Prem Plaza, Subhash Nagar, Rohtak, Haryana,
            India
          </li>
          <li>
            <FaPhoneAlt /> +91 85699 77732
          </li>
          <li>
            <FaEnvelope /> support@earninghandle.com
          </li>
        </ul>
        <p className="mt-5">
          © {getCurrentYear()} Earning Handle. All Rights Reserved | Made By{" "}
          <a
            href="https://innovizetechsolution.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Innovize Tech Solution Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
