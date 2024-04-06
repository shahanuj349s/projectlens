import React, { useState } from "react";
import "./Navbar1.css";
import logo from "../../Assets/Logo2.png";

function Navbar1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav class="navbar navbar-expand-lg sticky-top navbardiv">
      <div class="container-fluid navbarmain">
        <div className="flex align-items-center justify-content-between">
          <a class="navbar-brand" href="/">
            <img src={logo} width={180} />
          </a>
        </div>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 pe-3">
              <li class="nav-item px-2">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              <li
                class="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
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
                      BLU-Armor
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/product3">
                      TailorCraft
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link text-white" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
