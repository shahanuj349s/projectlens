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
          <div className="conInfo my-5 col-md-5 col-lg-4">
            <div className="conInfo2">
              <h1 className="conInfo-Head">Contact Information</h1>
              <p className="conInfo-TagLine">
                Fill up the form and our team will get back to you within 24
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
          <div className="conForm-Detail py-5 col-md-7 col-lg-8">
            <div className="ContactTitle">Contact Xelariz</div>
            <div className="conForm-Detail2">
              {/* <form className='form1 py-3' onSubmit={handleSubmit} > */}
              <form className="form1 py-3" method="POST">
                <div className="form2">
                  <div className="row mb-4 rClass1">
                    <div className="col">
                      <div className="form-outline rClass12">
                        <label className="form-label font-weight-bold" for="">
                          First name:
                        </label>
                        <input
                          type="text"
                          id=""
                          className="form-control inputInfoAll"
                          name="firstName"
                          placeholder="Please enter your firstname"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" for="">
                          Last name:
                        </label>
                        <input
                          type="text"
                          id=""
                          className="form-control inputInfoAll"
                          name="lastName"
                          placeholder="Please enter your lastname"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 rClass2">
                    <div className="col">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="">
                          Email:
                        </label>
                        <input
                          type="email"
                          id=""
                          className="form-control inputInfoAll"
                          name="email"
                          placeholder="Please enter a valid email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="">
                          Phone:
                        </label>

                        <input
                          type="tel"
                          id=""
                          className="form-control inputInfoAll"
                          name="phone"
                          placeholder="Please enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="">
                      Your Message:
                    </label>
                    <textarea
                      placeholder="TYPE YOUR MESSAGE HERE..."
                      className="form-control inputInfoAll"
                      id=""
                      rows="4"
                      name="message"
                      value={formData.message}
                      required
                    ></textarea>
                  </div>
                  <div className="sendMessageBtn">
                    <button
                      type="submit"
                      name="_next"
                      className="submitConFBtn btn btn-primary btn-block mt-3"
                    >
                      {status}
                    </button>
                    {/* <button type="submit" value="Send Message" className="submitConFBtn btn btn-primary btn-block mt-3">{status}</button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
