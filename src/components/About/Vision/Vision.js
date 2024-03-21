import React from "react";
import vision from "../../../Assets/Vision_1.jpg";

function Vision() {
  return (
    <div class="container py-3">
      <div class="card">
        <div class="row">
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">Vision</h3>
              <p class="card-text">
                At Xelariz we acknowledge that clear vision isn't just a need;
                it's a lifestyle. Our vision is to be your trusted assistant in
                achieving ideal visual clarity, ensuring that you experience the
                world with unparalleled precision and comfort.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img src={vision} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
