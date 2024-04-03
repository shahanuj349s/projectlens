import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo2.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div className="flex align-items-center justify-content-between">
          <a class="navbar-brand" href="#">
            <img src={logo} width={150} />
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
                <a class="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#">
                  Our Products
                </a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#">
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

export default Navbar;
