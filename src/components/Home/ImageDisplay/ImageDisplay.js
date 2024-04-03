import React from "react";
import Image_1 from "../../../Assets/Image_1.jpg";
import "./ImageDisplay.css";

function ImageDisplay() {
  return (
    <div class="container py-3">
      {/* <div class="card"> */}
      <div class="row imageDisplayText">
        <div class="col-6 d-flex justify-content-center align-items-center px-5 ">
          In today's fast-growing world, It is essential for people to
          anticipate and adapt to change, whether in their personal or
          professional lives. People with a clear vision can better negotiate
          problems, make educated decisions, and stay ahead of the curve. In
          businesses, it helps leaders make strategic decisions and drive
          innovation in order to remain competitive. On a personal level, it
          allows people to create objectives, conquer challenges, and grow in
          the face of uncertainty. Finally, clarity of vision acts as a guiding
          light, allowing individuals to prosper in a constantly changing world.
        </div>
        <div class="col-6">
          <img src={Image_1} class="d-block w-100 imageDisplay" alt="..." />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ImageDisplay;
