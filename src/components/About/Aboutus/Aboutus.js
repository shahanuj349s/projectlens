import React from "react";
import "./Aboutus.css";
import AboutUs_1 from "../../../Assets/About_1.jpg";

function Aboutus() {
  return (
    <div class="pb-4 aboutUsMain">
      {/*<div class="card">*/}
      <div class="d-flex flex-md-row flex-column aboutUsContainer">
        <div class="col-md-4 flex-column">
          <img src={AboutUs_1} class="aboutUsImage" alt="..." />
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center px-5 aboutBodyMain">
          <div class="card-body px-3">
            <h3 class="card-title text-white">About Us</h3>
            <div>
              <hr />
            </div>
            <p class="card-text text-white aboutUsText">
              Welcome to Xelariz, where creativity and clarity combine. Being in
              optical technology, we are committed to designing lenses that
              improve your eyesight along with your visual health. Come along on
              a trip where comfort, style, and accuracy come together to
              completely transform the way you see the world.
            </p>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
}

export default Aboutus;
