import React, { useState } from "react";
import "./Navbar1.css";
import logo from "../../Assets/Logo2.png";
import { NavLink } from "react-router-dom";

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
          <a className="d-flex navbar-brand" href="/">
            {/* <h1>LOGO</h1> */}
            <img src={logo} className="img-logo" />
          </a>

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
                <a
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  href="/about-us"
                >
                  <span className="landing-navbar">About Us</span>
                </a>
              </li>
              <li
                class="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  class="nav-link dropdown-toggle text-white d-flex align-items-center px-1"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="landing-navbar">Our Products</span>
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                >
                  <li>
                    <a class="dropdown-item" href="/product1">
                      OpenVista
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product2">
                      BLU-Armour
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product3">
                      TailorCraft
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item py-2 px-lg-2">
                <a
                  className="nav-link px-1 p-0 d-flex align-items-center"
                  href="/contact-us"
                >
                  <span className="landing-navbar">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
