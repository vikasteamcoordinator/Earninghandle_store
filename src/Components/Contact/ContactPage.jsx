import React, { useState } from "react";
import "./ContactPage.css";
import contact1 from "../../Assets/contactBg.png";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="ImageSection">
        <img className="bgImg" src={contact1} alt="bg" />
      </div>
      <div className="contactSection">
        <div className="container row">
          <div className="contactInfo col-md-7">
            <div className="contactForm">
              <h3>Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  placeholder="Name *"
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email address *"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  rows={1}
                  cols={40}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="contactMap col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.5923262754227!2d76.6064157!3d28.892259299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85b7d2b44d1d%3A0x50cdc5b3b77bc5c1!2sEarning%20Handle!5e1!3m2!1sen!2sin!4v1751277851078!5m2!1sen!2sin"
              width="400"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
