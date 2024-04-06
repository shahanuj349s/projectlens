import React from "react";
import ProductImage from "../../Assets/Product_description_1.jpg";
import icon from "../../Assets/Icon1.png";
import ProuctImage_1 from "../../Assets/ProductImage_1.jpg";
import "./Product1.css";

function Product1() {
  const blocks = [
    {
      text: "Smudge Proof",
      description:
        "Lenses resist fingerprints and smudges, resulting in clearer vision with less frequent cleaning.",
    },
    {
      text: "UV Protection",
      description:
        "Intended to protect the eyes from potential damage brought on by extended exposure to dangerous UV radiation by blocking ultraviolet (UV) rays from the sun.",
    },
    {
      text: "Scratch resistance",
      description:
        "Makes the lenses more durable and less prone to scratches, maintaining their clarity and extending the lifespan of the eyewear.",
    },
    {
      text: "Anti Reflective",
      description:
        "Coating to decrease reflections and glare, improving visual clarity and reducing blurred vision.",
    },
    {
      text: "Durable Resistance",
      description:
        "Lenses are long-lasting and resilient against scratches, damage, and other environmental conditions because of their design to endure wear and tear.",
    },
  ];

  const topBlocks = blocks.slice(0, 3);
  const bottomBlocks = blocks.slice(3);

  return (
    <div>
      <div>
        <img src={ProductImage} className="hero-image" />
        <div class="product1-image-text">
          <h3>OpenVista</h3>
          <hr />
          <p className="product1-image-subtext">
            See every detail with clarity-enhanced lenses.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around py-5">
        {topBlocks.map((block, index) => (
          <div key={index} className="col-2 ">
            <img src={icon} width={80} height={80} />
            <div className="product1TextHeading">{block.text}</div>
            <div className="product1TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-evenly py-5">
        {/* Mapping over bottomBlocks */}
        {bottomBlocks.map((block, index) => (
          <div key={index} className="col-2">
            <img src={icon} width={80} height={80} alt="Icon" />
            <div className="product1TextHeading">{block.text}</div>
            <div className="product1TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div class="container py-3">
        {/* <div class="card"> */}
        <div class="row product1Text">
          <div class="col-md-6 d-flex justify-content-center align-items-center px-5">
            Enter a world of clarity with expertly developed lenses that provide
            outstanding visual clarity. Lenses are designed to deliver
            crystal-clear vision, making every detail crisp and sharp.
            Experience the world with more clarity and definition. From bright
            landscapes to intricate details, there is no compromise on clarity
            in any scenario. Embrace the clarity you want and see the world in
            an innovative manner.
          </div>
          <div class="col-md-6">
            <img
              src={ProuctImage_1}
              class="d-block w-100 product1-image"
              alt="..."
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product1;
