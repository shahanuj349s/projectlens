import React from "react";
import Carousel_1 from "../../../Assets/Carousel_1.jpeg";
import Carousel_2 from "../../../Assets/Carousel_2.jpg";
import Carousel_3 from "../../../Assets/Carousel_3.jpg";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item carousel-item1-container active">
            <img
              src={Carousel_1}
              class="d-block image carousel-item1-image"
              alt="..."
            />
            <div class="carousel1-text-container">
              <div className="carousel1-text-heading">Frame your world</div>
              {" "}
              <div className="carousel1-text-heading">with clarity.</div>
              <p className="carousel1-text-desc pt-2">
                Experience incomparable comfort and crystal-clear vision - as
                every look deserves brilliance.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Carousel_3}
              class="d-block image carousel-item3-image"
              alt="..."
            />
            <div class="carousel3-text-container">
              <div className="carousel3-text-heading">
                <span className="what">What</span>
                <span class="styled-text">How</span> you look
                <span class="arrow">
                  ^ <span className="also">also</span>
                </span>
                matters.
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Carousel_2}
              class="d-block image carousel-item2-image"
              alt="..."
            />
            <div class="carousel2-text-container">
              <div className="carousel2-text-heading">
                Clarity in every glance.
              </div>
              <p className="carousel2-text-desc pt-2">
                Enhance everyday with lenses that reflect clarity, comfort, and
                visual artistry.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
