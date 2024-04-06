import React from "react";
import "./Mission.css";
import mission from "../../../Assets/Mission_1.jpg";

function Mission() {
  return (
    <div class="">
      {/*<div class="card">*/}
      <div class="row missionText">
        <div class="col-md-4">
          <img src={mission} class="d-block w-100 mission" alt="..." />
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center px-5">
          <div class="card-body text-white px-3">
            <h3 class="card-title">Mission</h3>
            <div>
              <hr />
            </div>
            <p class="card-text fs-5">
              At Xelariz, We're on a mission to revolutionise clarity and to
              also prioritize visual health. Our goal is to create optical
              lenses that not only improve eyesight but also completely change
              the way you perceive the world by ingeniously fusing innovation
              and design. Our goal is to become your trusted partner for
              clarity, comfort, and elegance in every frame."
            </p>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
}

export default Mission;
