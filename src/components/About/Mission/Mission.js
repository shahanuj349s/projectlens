import React from "react";
import mission from "../../../Assets/Mission_1.jpg";

function Mission() {
  return (
    <div class="container py-3">
      <div class="card">
        <div class="row">
          <div class="col-md-4">
            <img src={mission} class="d-block w-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">Mission</h3>
              <p class="card-text">
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
      </div>
    </div>
  );
}

export default Mission;
