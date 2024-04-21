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
          <div class="carousel-item active">
            <img src={Carousel_1} class="d-block image" alt="..." />
            <div class="carousel-text1">
              <h1>See Beyond.</h1> <h1> See Better.</h1>
              <p className="fs-5 pt-2">
                Experience incomparable comfort and crystal-clear vision - as
                every look deserves brilliance.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Carousel_2} class="d-block image" alt="..." />
            <div class="carousel-text2">
              {/* <h5>Second slide label</h5> */}
              <h1>Clarity in every glance.</h1>
              <p className="fs-5 pt-2">
                Enhance everyday with lenses that reflect clarity, comfort, and
                visual artistry.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Carousel_3} class="d-block image" alt="..." />
            <div class="carousel-text3">
              {/* <h5>Third slide label</h5> */}
              <h1>Dare to dream beyond what's possible.</h1>
              <p className="fs-5 pt-2">
                Lenses serve a vital role in improving visual, protecting the
                eyes, and providing comfort. Advanced lens technology can shield
                the eyes from harmful UV rays and blue light, preserving their
                health.
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
