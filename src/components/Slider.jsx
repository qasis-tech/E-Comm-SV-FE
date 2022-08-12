import React from "react";

import BackgroundImage from "../assets/bg_1.jpg";
import BackgroundImage2 from "../assets/bg_2.jpg";

import "../styles/button.styles.scss";
import "../pages/user/home/index.styles.scss";

const SliderComponent = () => {
  return (
    <section id="home-section" className="hero">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "872px" }}>
            <img
              src={BackgroundImage}
              className="d-block w-100"
              alt="Background image"
            />
            <div className="row carousel-caption d-none d-md-block  justify-content-center align-items-center">
              <div className="col-md-12 slider-text text-center">
                <h1 className="mb-2">
                  We serve Fresh Vegestables &amp; Fruits
                </h1>
                <h2 className="subheading mb-4">
                  We deliver organic vegetables &amp; fruits
                </h2>
                <p>
                  <a href="#" className="btn btn-success">
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "872px" }}>
            <img
              src={BackgroundImage2}
              className="d-block w-100"
              alt="Background Image"
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="col-md-12 slider-text text-center">
                <h1 className="mb-2">
                  We serve Fresh Vegestables &amp; Fruits
                </h1>
                <h2 className="subheading mb-4">
                  We deliver organic vegetables &amp; fruits
                </h2>
                <p>
                  <a href="#" className="btn btn-success">
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default SliderComponent;
