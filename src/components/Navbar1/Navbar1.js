import React, { useState } from "react";
import "./Navbar1.css";
import logo from "../../Assets/Logo2.png";
import { Link, NavLink } from "react-router-dom";

function Navbar1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const [createDropDown, setCreateDropDown] = useState(false);
  const [activeComponent, setActiveComponent] = useState("/");

  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const showCreateDropDown = () => {
    setCreateDropDown(!createDropDown);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top py-3`}
        role="navigation"
      >
        <div className="container-fluid px-4 px-md-5">
          <Link className="d-flex navbar-brand" to="/">
            {/* <h1>LOGO</h1> */}
            <img src={logo} className="img-logo" />
          </Link>

          <button
            type="button"
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                class="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  class="nav-link dropdown-toggle text-white d-flex align-items-center px-1"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="landing-navbar">Our Products</span>
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                >
                  <li>
                    <Link class="dropdown-item" to="/openvista">
                      OpenVista
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/BLU-Armour">
                      BLU-Armour
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/tailorcraft">
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
    </>
  );
}

export default Navbar1;
