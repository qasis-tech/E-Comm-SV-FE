import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import BannerImage from "../../../assets/bg_1.jpg";
import ProductImage from "../../../assets/product-1.jpg";
import Product1 from "../../../assets/product-2.jpg";
import Product2 from "../../../assets/product-3.jpg";
import Product3 from "../../../assets/product-4.jpg";

import "./product-details.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";
export default function CustomerProductDetails() {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };
  return (
    <div>
      <HeaderComponent />

      <div class="hero-wrap hero-bread" style={style}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Product</span>
              </p>
              <h1 class="mb-0 bread">Product</h1>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div style={{ height: "65%" }}>
                <a href={ProductImage} class="image-popup">
                  <img
                    src={ProductImage}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div class="row">
                <div class="col-4">
                  <img
                    src={ProductImage}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div class="col-4">
                  <img
                    src={ProductImage}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div class="col-4">
                  <img
                    src={ProductImage}
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 product-details pl-md-5">
              <h3>Bell Pepper</h3>
              <div class="rating d-flex">
                <p class="text-left me-4">
                  <a href="#" class="me-2 text-decoration-none">
                    5.0
                  </a>
                  <a href="#">
                    <span>
                      <StarBorderIcon />
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <StarBorderIcon />
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <StarBorderIcon />
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <StarBorderIcon />
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <StarBorderIcon />
                    </span>
                  </a>
                </p>
                <p class="text-left me-4">
                  <a
                    href="#"
                    class="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    100 <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p class="text-left">
                  <a
                    href="#"
                    class="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    500 <span tyle={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p class="price">
                <span>$120.00</span>
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Text
                should turn around and return to its own, safe country. But
                nothing the copy said could convince her and so it didn't take
                long until.
              </p>
              <div class="row mt-4">
                <div class="col-md-6 mb-3">
                  <div class="form-group d-flex">
                    <div class="select-wrap">
                      <div class="icon">
                        <KeyboardArrowDownIcon />
                      </div>
                      <select name="" id="" class="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="input-group col-md-6 d-flex mb-3">
                  <span class="input-group-btn me-2">
                    <button
                      type="button"
                      class="quantity-left-minus btn"
                      data-type="minus"
                      data-field=""
                    >
                      <RemoveIcon />
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    class="form-control input-number"
                    value="1"
                    min="1"
                    max="100"
                  />
                  <span class="input-group-btn ms-2">
                    <button
                      type="button"
                      class="quantity-right-plus btn"
                      data-type="plus"
                      data-field=""
                    >
                      <AddIcon />
                    </button>
                  </span>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                  <p style={{ color: "#000" }}>600 kg available</p>
                </div>
              </div>
              <p>
                <a href="cart.html" class="btn btn-black py-3 px-5">
                  Add to Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5">
        <div class="container ">
          <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center">
              <span class="subheading">Products</span>
              <h2 class="mb-4">Related Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="product">
                <a href="#" class="img-prod">
                  <img
                    class="img-fluid"
                    src={ProductImage}
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
                    src={Product1}
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
            <div class="col-md-6 col-lg-3 ftco-animate">
              <div class="product">
                <a href="#" class="img-prod">
                  <img
                    class="img-fluid"
                    src={Product2}
                    alt="Colorlib Template"
                  />
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#" class=" text-decoration-none">
                      Green Beans
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
            <div class="col-md-6 col-lg-3 ftco-animate">
              <div class="product">
                <a href="#" class="img-prod">
                  <img
                    class="img-fluid"
                    src={Product3}
                    alt="Colorlib Template"
                  />
                  <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                  <h3>
                    <a href="#" class=" text-decoration-none">
                      Purple Cabbage
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

      <FooterComponent />
    </div>
  );
}
