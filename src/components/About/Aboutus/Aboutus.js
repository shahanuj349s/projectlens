import React from "react";
import AboutUs_1 from "../../../Assets/About_1.jpeg";

function Aboutus() {
  return (
    <div class="container py-3">
      <div class="card">
        <div class="row">
          <div class="col-md-4">
            <img src={AboutUs_1} class="d-block w-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">About Us</h3>
              <p class="card-text">
                Welcome to Xelariz, where creativity and clarity combine.
                Being in optical technology, we are committed to designing
                lenses that improve your eyesight along with your
                visual health. Come along on a trip where comfort, style, and
                accuracy come together to completely transform the way you see
                the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
