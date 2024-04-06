import React from "react";
import "./Vision.css";
import vision from "../../../Assets/Vision_1.jpg";

function Vision() {
  return (
    <div class="pb-4">
      {/*<div class="card">*/}
      <div class="row visionText">
        <div class="col-md-8 d-flex justify-content-center align-items-center px-5">
          <div class="card-body px-3">
            <h3 class="card-title text-white">Vision</h3>
            <div>
              <hr />
            </div>
            <p class="card-text text-white fs-5">
              At Xelariz we acknowledge that clear vision isn't just a need;
              it's a lifestyle. Our vision is to be your trusted assistant in
              achieving ideal visual clarity, ensuring that you experience the
              world with unparalleled precision and comfort.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img src={vision} class="d-block w-100 vision" alt="..." />
        </div>
      </div>
      {/*</div>*/}
    </div>
  );
}

export default Vision;
