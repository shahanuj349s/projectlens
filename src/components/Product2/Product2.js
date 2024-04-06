import React from "react";
import ProductImage from "../../Assets/Product_description_2.jpg";
import icon from "../../Assets/Icon1.png";
import ProuctImage_2 from "../../Assets/ProductImage_2.jpg";
import "./Product2.css";

function Product2() {
  const blocks = [
    {
      text: "Blue Light Filtering",
      description:
        "A thin coating on lenses reduces reflections, enhances contrast, and protects against harmful blue light emitted by screens and sunlight.",
    },
    {
      text: "Smudge Proof",
      description:
        "Lenses resist fingerprints and smudges, resulting in clearer vision with less frequent cleaning.",
    },
    {
      text: "Durable Resistance",
      description:
        "Lenses are long-lasting and resilient against scratches, damage, and other environmental conditions because of their design to endure wear and tear.",
    },
    {
      text: "UV Protection",
      description:
        "Intended to protect the eyes from potential damage brought on by extended exposure to dangerous UV radiation by blocking ultraviolet (UV) rays from the sun.",
    },
    {
      text: "Anti Reflective",
      description:
        "Coating to decrease reflections and glare, improving visual clarity and reducing blurred vision.",
    },
  ];

  const topBlocks = blocks.slice(0, 3);
  const bottomBlocks = blocks.slice(3);
  return (
    <div>
      <div>
        <img src={ProductImage} className="hero-image" />
        <div class="product2-image-text">
          <h3>BLU-Armour</h3>
          <hr />
          <p className="product2-image-subtext">
            Unlock vibrant clarity while safeguarding your eyes from digital
            glare.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around py-5">
        {topBlocks.map((block, index) => (
          <div key={index} className="col-2 ">
            <img src={icon} width={80} height={80} />
            <div className="product2TextHeading">{block.text}</div>
            <div className="product2TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-evenly py-5">
        {/* Mapping over bottomBlocks */}
        {bottomBlocks.map((block, index) => (
          <div key={index} className="col-2">
            <img src={icon} width={80} height={80} alt="Icon" />
            <div className="product2TextHeading">{block.text}</div>
            <div className="product2TextDescription">{block.description}</div>
          </div>
        ))}
      </div>

      <div class="container py-3">
        {/* <div class="card"> */}
        <div class="row product2Text">
          <div class="col-md-6 d-flex justify-content-center align-items-center px-5">
            Dive into a world of clarity and style with blue-tinted lenses
            paired with sleek spectacle frames. These lenses are  designed to
            reduce eye strain and exhaustion, provides a refreshing visual
            experience by filtering out harmful blue light while maintaining
            genuine colours. Whether you're at work or outside, blue blog lenses
            give exceptional protection and clarity, keeping eyes comfortable
            and lively.
          </div>
          <div class="col-md-6 product2-image">
            <img
              src={ProuctImage_2}
              class="d-block w-100 product2-image"
              alt="..."
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product2;
