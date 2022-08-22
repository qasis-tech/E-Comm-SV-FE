import React from "react";
import Carousel from "react-bootstrap/Carousel";

import BackgroundImage from "../assets/bg_1.jpg";
import BackgroundImage2 from "../assets/bg_2.jpg";
import BackgroundImage3 from "../assets/bg_4.jpg";

import "../styles/button.styles.scss";
import "../pages/user/home/home.styles.scss";

const SliderComponent = () => {
  return (
    <Carousel fade className="carousel-hero">
      <Carousel.Item className="carousel-item-section">
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={BackgroundImage}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3> We serve Fresh Vegetables &amp; Fruits</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-section">
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={BackgroundImage2}
          alt="Second slide"
        />

        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item-section">
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={BackgroundImage3}
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <p>
            <a href="#" className="btn btn-success">
              View Details
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderComponent;
