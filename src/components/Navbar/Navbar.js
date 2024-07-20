import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo2.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTogglerOpen, setIsTogglerOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleTogglerClick = () => {
    setIsTogglerOpen(!isTogglerOpen);
    // Add code to handle background color change when toggler is clicked
    if (!isTogglerOpen) {
      setScrolled(true);
    } else {
      if (window.scrollY === 0) {
        setScrolled(false);
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-2 ${
        scrolled || isTogglerOpen ? "navbarmain-scrolled" : "navbarmain"
      }`}
      role="navigation"
    >
      <div className="container-fluid px-4 px-md-5 navbar navbarmain">
        <Link className="d-flex navbar-brand" to="/">
          <img src={logo} className="img-logo" alt="Logo" />
        </Link>

        <button
          type="button"
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleTogglerClick}
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarRightAlignExample"
        >
          <ul className="d-lg-flex navbar-nav align-items-center mb-2 mb-lg-0 navbar-container">
            <li className="nav-item py-2 px-lg-2">
              <Link
                className="nav-link px-1 p-0 d-flex align-items-center"
                to="/about-us"
              >
                <span className="landing-navbar">About Us</span>
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center px-1"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="landing-navbar">Our Products</span>
              </a>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/openvista">
                    OpenVista
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/BLU-Armour">
                    BLU-Armour
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tailorcraft">
                    TailorCraft
                  </Link>
                </li>
              </ul>
              
            </li>
            <li className="nav-item py-2 px-lg-2">
              <Link
                className="nav-link px-1 p-0 d-flex align-items-center"
                to="/contact-us"
              >
                <span className="landing-navbar">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;