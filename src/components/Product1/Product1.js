import React from "react";
import ProductImage from "../../Assets/Product_description_1.jpg";
import icon from "../../Assets/Icon1.png";
import ProuctImage_1 from "../../Assets/ProductImage_1.jpg";
import "./Product1.css";

function Product1() {
  const blocks = [
    {
      text: "Absolute Transparency",
      description:
        "Offers maximum clarity and minimal distortion, providing a clear and Unhindered view.",
    },
    {
      text: "Easy to Clean",
      description:
        "Creates a smooth coating that blocks both moisture and dust, making it easy to remove fingerprints and keep clear vision.",
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
      text: "UV Protection",
      description:
        "Intended to protect the eyes from potential damage brought on by extended exposure to dangerous UV rays from the sun.",
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

      {/* <div className="d-flex justify-content-around py-5">
        {topBlocks.map((block, index) => (
          <div key={index} className="col-2 ">
            <img src={icon} width={80} height={80} />
            <div className="product1TextHeading">{block.text}</div>
            <div className="product1TextDescription">{block.description}</div>
          </div>
        ))}
      </div> */}

      <div className="d-flex block-container-product1 py-5 flex-wrap">
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`col-md-2 col-sm-4 block-main-product1 ${
              index < 3 ? "mb-5" : "mb-4 text-center"
            }`}
          >
            <img src={icon} width={80} height={80} alt="Icon" />
            <div className="product1TextHeading">{block.text}</div>
            <div className="product1TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div class="product1-container py-3">
        {/* <div class="card"> */}
        <div class="d-flex flex-md-row flex-column-reverse product1TextContainer">
          <div class="d-flex col-md-6 justify-content-center align-items-center px-5 product1Text">
            Enter a world of clarity with expertly developed lenses that provide
            outstanding visual clarity. Lenses are designed to deliver
            crystal-clear vision, making every detail crisp and sharp.
            Experience the world with more clarity and definition. From bright
            landscapes to intricate details, there is no compromise on clarity
            in any scenario. Embrace the clarity you want and see the world in
            an innovative manner.
          </div>
          <div class="d-flex col-md-6 ">
            <img src={ProuctImage_1} class="product1-image" alt="..." />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product1;
