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
        className={`navbar navbar-expand-lg navbar-light sticky-top py-2 `}
        role="navigation"
      >
        <div className="container-fluid px-4 px-md-5 navbar">
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
            <ul className="navbar-nav ml-auto align-items-center mb-2 mb-lg-0 navbar-container">
              <li
                className="nav-item py-2 d-lg-none"
                onClick={showCreateDropDown}
              >
                <a
                  className={`nav-link navbar-content px-1 p-0 d-flex align-items-center ${
                    activeComponent === "create" && createDropDown
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleItemClick("create")}
                >
                  Create
                  <div className="px-2">
                    <i
                      className="fas fa-angle-down"
                      style={{
                        transform: createDropDown
                          ? "rotate(-180deg)"
                          : "rotate(0)",
                        transition: "transform 0.5s ease-in-out",
                      }}
                    ></i>
                  </div>
                </a>

                {createDropDown && (
                  <div
                    className="create-dropdown p-3 text-center"
                    onClick={showCreateDropDown}
                  >
                    <div className={`d-flex py-1`}>
                      <a
                        href="/dataset-marketplace/create-dataset"
                        className="link-style"
                      >
                        Create Dataset
                      </a>
                    </div>
                    <div className={`d-flex py-1`}>
                      <a
                        href="/model-marketplace/create-model"
                        className="link-style"
                      >
                        Create Model
                      </a>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-item py-2 d-lg-none">
                <NavLink
                  className="nav-link navbar-content px-1 p-0 d-flex align-items-center"
                  to="/user-dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item py-2 d-lg-none">
                <NavLink
                  className="nav-link navbar-content px-1 p-0 d-flex align-items-center"
                  to="/dataset-marketplace"
                >
                  Dataset Marketplace
                </NavLink>
              </li>
              <li className="nav-item py-2 d-lg-none">
                <NavLink
                  className="nav-link navbar-content px-1 p-0 d-flex align-items-center"
                  to="/model-marketplace"
                >
                  Model Marketplace
                </NavLink>
              </li>

              <li className="nav-item py-2 d-lg-none">
                <NavLink
                  className="nav-link navbar-content px-1 p-0 d-flex align-items-center"
                  to="/de-computation"
                >
                  Decentralized Computation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
