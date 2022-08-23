import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import BackgroundImage from "../../../assets/bg_1.jpg";
import ProductImage from "../../../assets/product-1.jpg";
import Product1 from "../../../assets/product-2.jpg";
import Product2 from "../../../assets/product-3.jpg";
import Product3 from "../../../assets/product-4.jpg";

import "./product-details.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";
import ProductComponent from "../../../components/product";

export default function CustomerProductDetails() {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };
  return (
    <div className="product-details-container">
      <HeaderComponent />

      <div
        className="product-details-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Product</span>
              </p>
              <h1 className="mb-0 bread">Product</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div style={{ height: "55%" }}>
                <a href={ProductImage} className="image-popup">
                  <img
                    src={ProductImage}
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="row">
                <div className="col-4">
                  <img
                    src={ProductImage}
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="col-4">
                  <img
                    src={ProductImage}
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="col-4">
                  <img
                    src={ProductImage}
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-details pl-md-5">
              <h3>Bell Pepper</h3>
              <div className="rating d-flex">
                <p className="text-left me-4">
                  <a href="#" className="me-2 text-decoration-none">
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
                <p className="text-left me-4">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    100 <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a
                    href="#"
                    className="text-decoration-none"
                    style={{ color: "#000" }}
                  >
                    500 <span tyle={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p className="price">
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
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <KeyboardArrowDownIcon />
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn me-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
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
                    className="form-control input-number"
                    value="1"
                    min="1"
                    max="100"
                  />
                  <span className="input-group-btn ms-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field=""
                    >
                      <AddIcon />
                    </button>
                  </span>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p style={{ color: "#000" }}>600 kg available</p>
                </div>
              </div>
              <p>
                <a href="cart.html" className="btn btn-black py-3 px-5">
                  Add to Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container ">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Products</span>
              <h2 className="mb-4">Related Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => {
              return <ProductComponent key={index} />;
            })}
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
