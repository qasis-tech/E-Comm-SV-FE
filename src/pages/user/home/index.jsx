import {useEffect,useState} from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import product2 from "../../../assets/product-2.jpg";
import Background3 from "../../../assets/bg_3.jpg";

import "./home.styles.scss";
import HeaderComponent from "../../../components/Header";
import SliderComponent from "../../../components/Slider";
import "../../../styles/button.styles.scss";

import FooterComponent from "../../../components/Footer";
import CategoriesComponent from "./components/categories";
import ProductComponent from "../../../components/product";
import { URLS } from "../../../config/urls.config";

const Home = () => {
  const[isLoading,setLoader]=useState(false);
const[productData,setProductData]=useState([]);

  useEffect(() => {
    getProductList();
    getDealOfDay();
  }, []);
  const getProductList = () => {
    setLoader(true);
    axios

      .get(`${URLS.product}`)
      .then((res) => {
        setLoader(false);
        setProductData(res.data);
        console.log("res productttt", res);
      })
      .catch((err) => {
        setLoader(false);
        console.log("err in product LIst", err);
      });
  };

  const getDealOfDay=()=>{
    axios
  .get(`${URLS.deal}`)
    .then((res) => {
      
      console.log("res deal", res);
    })
    .catch((err) => {
     
      console.log("err in deal LIst", err);
    });
  }
  const navigation = useNavigate();
  return (
    <div>
      <HeaderComponent />
      <SliderComponent />
      <CategoriesComponent />
      <section className="ftco-section ftco-product">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ">
              <span className="subheading">Featured Products</span>
              <h2 className="mb-4">Our Products</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {productData.map((items, index) => {
              return <ProductComponent productName={items.name} price={items.price} offerPrice={items.offerPrice} key={items._id} />;
            })}

          </div>
        </div>
      </section>
      <section className="ftco-section deal-of-the-day-section mt-5">
        <img src={Background3} alt="Background image" />
        <div className="container">
          <div className="row justify-content-end pt-5">
            <div className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
              <span className="subheading">Best Price For You</span>
              <h2 className="mb-4">Deal of the day</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
              <h3>
                <a href="#" className="text-decoration-none">
                  Spinach
                </a>
              </h3>
              <span className="price">
                $10 <a href="#">now $5 only</a>
              </span>
              <div id="timer" className="d-flex mt-5">
                <div className="time" id="days">
                  -955<span>Days</span>
                </div>
                <div className="time pl-3" id="hours">
                  22<span>Hours</span>
                </div>
                <div className="time pl-3" id="minutes">
                  45<span>minutes</span>
                </div>
                <div className="time pl-3" id="seconds">
                  43<span>seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
