import React from "react";
import Product_description_1 from "../../../Assets/Product_description_1.jpg";
import Product_description_2 from "../../../Assets/Product_description_2.jpg";
import Product_description_3 from "../../../Assets/Product_discription_31.jpg";
import "./ProductDisplay.css";

function ProductDisplay() {
  return (
    <div className=" pb-5">
      <h1 className="faq-title pt-4 pb-3">Discover our products</h1>
      <div className="d-flex flex-column flex-md-row justify-content-evenly ">
        <div class="card col-md-3">
          <img src={Product_description_1} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">OpenVista</h5>
              <p class="card-text ">
                For easy cleaning, transparency and durability.
              </p>
            </div>
            <a href="/product1" class="btn btnStyle mt-2">
              Discover
            </a>
          </div>
        </div>
        <div class="card col-md-3">
          <img src={Product_description_2} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">BLU-Armour</h5>
              <p class="card-text">
                Selective filtering to reduce digital eye strain.
              </p>
            </div>
            <a href="/product2" class="btn btnStyle mt-2">
              Discover
            </a>
          </div>
        </div>
        <div class="card col-md-3">
          <img src={Product_description_3} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">TailorCraft</h5>
              <p class="card-text">
                For seamless transition from close proximity to a distance.
              </p>
            </div>
            <a href="/product3" class="btn btnStyle mt-2">
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
