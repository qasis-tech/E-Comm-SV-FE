import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import { URLS } from "../config/urls.config";
import Loader from "./Loader";

import BackgroundImage from "../assets/bg_1.jpg"
import BackgroundImage2 from "../assets/bg_2.jpg";
import BackgroundImage3 from "../assets/bg_4.jpg";

import "../styles/button.styles.scss";
import "../pages/user/home/home.styles.scss";

const SliderComponent = () => {
const [sliderData,setSliderData]=useState([])
const [imgSrc, setImgSrc] = useState([]);
const [isLoading,setLoader]=useState(false)

useEffect(()=>{
getSliderList();
},[])

 const getSliderList=()=>{
  setLoader(true)
 axios.get(`${URLS.slider}`)
.then((res) => {
  setLoader(false)
  setSliderData(res.data)
  sliderData.map((data)=>{
  for(const values of data.sliderImage){
   setImgSrc(values.image)
  }
 })
 
})
.catch((err) => {
 setLoader(true)
 console.log("err in slider LIst", err);
});
 }
 
  return (
    <Carousel fade className="carousel-hero">
      <Carousel.Item className="carousel-item-section">
        <div className="overlay"></div>
        {isLoading?(
          <Loader/>
        ):(
        <img
          className="d-block w-100"
          src={imgSrc}
          alt="First slide"
          onError = {() => setImgSrc(BackgroundImage)}/>
        )}
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
      {/* <Carousel.Item className="carousel-item-section">
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
      </Carousel.Item> */}
    </Carousel>
  );
};

export default SliderComponent;
