import React from "react";
import "./Aboutus.css";
import AboutUs_1 from "../../../Assets/About_1.jpg";

function Aboutus() {
  return (
    <div class="pb-4">
      {/*<div class="card">*/}
      <div class="row aboutUsText">
        <div class="col-md-4">
          <img src={AboutUs_1} class="d-block w-100 aboutUs" alt="..." />
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center px-5">
          <div class="card-body px-3">
            <h3 class="card-title text-white">About Us</h3>
            <div><hr/></div>
            <p class="card-text text-white fs-5">
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
