import React from "react";
import ProductImage from "../../Assets/Product_discription_31.jpg";
import icon from "../../Assets/Icon1.png";
import ProuctImage_1 from "../../Assets/ProductImage_3.jpg";
import "./Product3.css";

function Product3() {
  const blocks = [
    {
      text: "Smooth Transition",
      description:
        "This eliminates the visible line found in bifocals and trifocals, offering a more natural and aesthetically pleasing appearance.",
    },
    {
      text: "Versatility",
      description:
        "Suitable for a wide range of activities and environments, from reading and using digital devices to driving and participating in outdoor activities.",
    },
    {
      text: "Freedom of Movement",
      description:
        "Freedom to move their eyes naturally within the lens corridor, rather than having to adjust their gaze to specific lens segments.",
    },
    {
      text: "Scratch resistance",
      description:
        "Makes the lenses more durable and less prone to scratches, maintaining their clarity and extending the lifespan of the eyewear.",
    },
    {
      text: "Enhanced Night Vision:",
      description:
        "Designed to improve night vision by reducing glare, reflections, and halos caused by artificial lighting and oncoming headlights.",
    },
  ];

  const topBlocks = blocks.slice(0, 3);
  const bottomBlocks = blocks.slice(3);

  return (
    <div>
      <div>
        <img src={ProductImage} className="hero-image" />
        <div class="product3-image-text">
          <h3>TailorCraft</h3>
          <hr />
          <p className="product3-image-subtext">Seamlessly Adapt to Every Distance and angle.</p>
        </div>
      </div>

      <div className="d-flex justify-content-around py-5">
        {topBlocks.map((block, index) => (
          <div key={index} className="col-2 ">
            <img src={icon} width={80} height={80} />
            <div className="product3TextHeading">{block.text}</div>
            <div className="product3TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-evenly py-5">
        {/* Mapping over bottomBlocks */}
        {bottomBlocks.map((block, index) => (
          <div key={index} className="col-2">
            <img src={icon} width={80} height={80} alt="Icon" />
            <div className="product3TextHeading">{block.text}</div>
            <div className="product3TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div class="container py-3">
        {/* <div class="card"> */}
        <div class="row product3Text">
          <div class="col-md-6 d-flex justify-content-center align-items-center px-5">
            Enhance visual experience with cutting-edge progressive lenses ,
            which are designed to give seamless vision correction while
            maintaining exceptional elegance and comfort. Progressive lens
            frames ensure a smooth transition between near, intermediate, and
            distant vision, allowing you to enjoy crystal-clear clarity at any
            distance.
          </div>
          <div class="col-md-6 ">
            <img
              src={ProuctImage_1}
              class="d-block w-100 product3-image"
              alt="..."
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product3;