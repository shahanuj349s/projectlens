import React from "react";
import Product_description_1 from "../../../Assets/Product_description_1.jpg";
import Product_description_2 from "../../../Assets/Product_description_2.jpg";
import "./ProductDisplay.css";

function ProductDisplay() {
  return (
    <div className="d-flex justify-content-evenly py-5">
      <div class="card col-5">
        <img src={Product_description_1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card col-5">
        <img src={Product_description_2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
