import React, { useState } from "react";
import "./Contact.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [status, setStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="conForm-Main container-fluid">
        <div className="conForm-Main2">
          <div className="conInfo my-5 my-md-3 col-11 col-md-9 col-lg-7 mx-auto">
            <div className="conInfo2">
              <h1 className="conInfo-Head">Contact Information</h1>
              <p className="conInfo-TagLine">
                For email our team will get back to you within 24
                hours.
              </p>
              <div className="conIcons1 ">
                <p className="d-flex align-items-center">
                  <FaPhoneAlt />
                  <div className="conAdd1 mx-2"> +1 202-xxx-2132</div>
                </p>
                <p className="d-flex align-items-center">
                  <FaEnvelope />
                  <div className="conAdd1 mx-2 text-white">
                    {" "}
                    <a className="conAdd12" href="mailto:">
                      -----
                    </a>
                  </div>
                </p>
                <p className="d-flex align-items-center">
                  <FaLocationDot />
                  <div className="conAdd1 mx-2">New Hampshire, Lake Maude</div>
                </p>
              </div>
              <div className="socialIcons py-3 ">
                <span className="socialIcons2">
                  <a
                    className="iconsList px-3"
                    target="_blank"
                    href="https://www.twitter.com"
                    rel="noreferrer noopener"
                  >
                    <FaTwitter size={30} />
                  </a>
                  <a
                    className="iconsList px-3"
                    target="_blank"
                    href="https://www.facebook.com"
                    rel="noreferrer noopener"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    className="iconsList px-3"
                    target="_blank"
                    href="https://www.instagram.com"
                    rel="noreferrer noopener"
                  >
                    <PiInstagramLogoFill size={30} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
