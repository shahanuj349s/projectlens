import React from "react";
import Product_description_1 from "../../../Assets/Product_description_1.jpeg";
import Product_description_2 from "../../../Assets/Product_description_2.jpeg";
import Product_description_3 from "../../../Assets/Product_description_3.jpg";
import "./ProductDisplay.css";
import { Link, useNavigate } from "react-router-dom";

function ProductDisplay() {
  const navigate = useNavigate();

  return (
    <div className=" pb-5">
      <h1 className="faq-title pt-4 pb-3">Discover our products</h1>
      <div className="d-flex flex-column flex-md-row justify-content-evenly ">
        <div class="card col-md-3" onClick={() => navigate("/openvista")}>
          <img src={Product_description_1} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">OpenVista</h5>
              <p class="card-text ">
                For easy cleaning, transparency and durability.
              </p>
            </div>
            <Link to="/openvista" class="btn btnStyle mt-2">
              Discover
            </Link>
          </div>
        </div>
        <div class="card col-md-3" onClick={() => navigate("/BLU-Armour")}>
          <img src={Product_description_2} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">BLU-Armour</h5>
              <p class="card-text">
                Selective filtering to reduce digital eye strain.
              </p>
            </div>
            <Link to="/BLU-Armour" class="btn btnStyle mt-2">
              Discover
            </Link>
          </div>
        </div>
        <div class="card col-md-3" onClick={() => navigate("/tailorcraft")}>
          <img src={Product_description_3} class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <div>
              <h5 class="card-title">TailorCraft</h5>
              <p class="card-text">
                For seamless transition from close proximity to a distance.
              </p>
            </div>
            <Link to="/tailorcraft" class="btn btnStyle mt-2">
              Discover
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
