import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import CategoryImage from "../../../assets/category.jpg";
import Category1 from "../../../assets/category-1.jpg";
import Category2 from "../../../assets/category-2.jpg";
import Category3 from "../../../assets/category-3.jpg";
import Category4 from "../../../assets/category-4.jpg";
import Product1 from "../../../assets/product-1.jpg";
import product2 from "../../../assets/product-2.jpg";
import Background3 from "../../../assets/bg_3.jpg";

import "./index.styles.scss";
import HeaderComponent from "../../../components/Header";
import SliderComponent from "../../../components/Slider";
import "../../../styles/button.styles.scss";
import FooterComponent from "../../../components/Footer";
const Home = () => {
  const navigation = useNavigate();
  return (
    <div>
      <HeaderComponent />
      <SliderComponent />

      <section class="ftco-section ftco-category pt-5 pb-5 mt-5">
        <div class="container">
          <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center ftco-animate">
              <span class="subheading">Category</span>
              <h2 class="mb-4">Our Category</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6">
                  <div class="category-wrap ftco-animate mb-4 d-flex align-items-end">
                    <img src={Category1} alt="Category Image" />
                    <div class="text px-3 py-1 bottom-left">
                      <h2 class="mb-0">
                        <a href="#" class=" text-decoration-none">
                          Fruits
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div class="category-wrap ftco-animate d-flex align-items-end">
                    <img src={Category2} alt="Category image" />
                    <div class="text px-3 py-1">
                      <h2 class="mb-0">
                        <a href="#" class=" text-decoration-none">
                          Vegetables
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="category-wrap ftco-animate mb-4 d-flex align-items-end">
                    <img src={Category1} alt="Category Image" />
                    <div class="text px-3 py-1 bottom-left">
                      <h2 class="mb-0">
                        <a href="#" class=" text-decoration-none">
                          Fruits
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div class="category-wrap ftco-animate d-flex align-items-end">
                    <img src={Category2} alt="Category image" />
                    <div class="text px-3 py-1">
                      <h2 class="mb-0">
                        <a href="#" class=" text-decoration-none">
                          Vegetables
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="category-wrap ftco-animate mb-4 d-flex align-items-end">
                <img src={Category3} alt="Category image" />
                <div class="text px-3 py-1">
                  <h2 class="mb-0">
                    <a href="#" class=" text-decoration-none">
                      Juices
                    </a>
                  </h2>
                </div>
              </div>
              <div class="category-wrap ftco-animate d-flex align-items-end">
                <img src={Category4} alt="category image" />
                <div class="text px-3 py-1">
                  <h2 class="mb-0">
                    <a href="#" class=" text-decoration-none">
                      Dried
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section mt-5">
        <div class="container">
          <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center ">
              <span class="subheading">Featured Products</span>
              <h2 class="mb-4">Our Products</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 ">
              <div class="product">
                <a href="#" class="img-prod">
                  <img
                    class="img-fluid"
                    src={Product1}
                    alt="Colorlib Template"
                  />
                  <span class="status">30% Off</span>
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#" class=" text-decoration-none">
                      Bell Pepper
                    </a>
                  </h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price">
                        <span class="mr-2 price-dc">$120.00</span>
                        <span class="price-sale">$80.00</span>
                      </p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a
                        href="#"
                        class="add-to-cart d-flex justify-content-center align-items-center text-center"
                      >
                        <span>
                          <MenuIcon />
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <ShoppingCartIcon />
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <FavoriteBorderIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 ftco-animate">
              <div class="product">
                <a href="#" class="img-prod">
                  <img
                    class="img-fluid"
                    src={product2}
                    alt="Colorlib Template"
                  />
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#" class=" text-decoration-none">
                      Strawberry
                    </a>
                  </h3>
                  <div class="d-flex">
                    <div class="pricing">
                      <p class="price">
                        <span>$120.00</span>
                      </p>
                    </div>
                  </div>
                  <div class="bottom-area d-flex px-3">
                    <div class="m-auto d-flex">
                      <a
                        href="#"
                        class="add-to-cart d-flex justify-content-center align-items-center text-center"
                      >
                        <span>
                          <MenuIcon />
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <ShoppingCartIcon />
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <FavoriteBorderIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section deal-of-the-day-section mt-5">
        <img src={Background3} alt="Background image" />
        <div class="container">
          <div class="row justify-content-end pt-5">
            <div class="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
              <span class="subheading">Best Price For You</span>
              <h2 class="mb-4">Deal of the day</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
              <h3>
                <a href="#" class="text-decoration-none">
                  Spinach
                </a>
              </h3>
              <span class="price">
                $10 <a href="#">now $5 only</a>
              </span>
              <div id="timer" class="d-flex mt-5">
                <div class="time" id="days">
                  -955<span>Days</span>
                </div>
                <div class="time pl-3" id="hours">
                  22<span>Hours</span>
                </div>
                <div class="time pl-3" id="minutes">
                  45<span>minutes</span>
                </div>
                <div class="time pl-3" id="seconds">
                  43<span>seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "6em" }}>
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
