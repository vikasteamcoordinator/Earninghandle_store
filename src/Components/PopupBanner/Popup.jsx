import React, { useState, useEffect } from "react";
import "./Popup.css";
import popupImg from "../../Assets/newsletter-popup.jpg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isPopupDismissed = localStorage.getItem("popupDismissed");
    if (!isPopupDismissed) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem("popupDismissed", "true");
    }, 300);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <div className="popup-left">
            <img src={popupImg} alt="Newsletter" />
          </div>
          <div className="popup-right">
            <h2>Sign Up to Our Newsletter</h2>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">JOIN</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;