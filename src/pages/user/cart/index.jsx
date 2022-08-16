import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Product1 from "../../../assets/product-2.jpg";
import Product2 from "../../../assets/product-6.jpg";
import BackgroundImage from "../../../assets/bg_1.jpg";

import "./cart.styles.scss";
import "../../../styles/button.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";

export default function CartPage() {
  const navigation = useNavigate();
  return (
    <div className="cart-container">
      <HeaderComponent />
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Cart</span>
              </p>
              <h1 className="mb-0 bread">Cart</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-cart mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="product-remove">
                        <a href="#">
                          <CloseIcon />
                        </a>
                      </td>

                      <td className="image-prod">
                        <div
                          className="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={Product1}
                            style={{ height: "50%", width: "100%" }}
                          />
                        </div>
                      </td>

                      <td className="product-name">
                        <h3>Bell Pepper</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries
                        </p>
                      </td>

                      <td className="price">$4.90</td>

                      <td className="quantity">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            className="quantity form-control input-number"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>

                      <td className="total">$4.90</td>
                    </tr>

                    <tr className="text-center">
                      <td className="product-remove">
                        <a href="#">
                          <CloseIcon />
                        </a>
                      </td>

                      <td className="image-prod">
                        <div
                          className="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={Product2}
                            style={{ height: "50%", width: "100%" }}
                          />
                        </div>
                      </td>

                      <td className="product-name">
                        <h3>Bell Pepper</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries
                        </p>
                      </td>

                      <td className="price">$15.70</td>

                      <td className="quantity">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            className="quantity form-control input-number"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>

                      <td className="total">$15.70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label for="">Coupon code</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <p>
                <a href="checkout.html" className="btn btn-success py-3 px-4">
                  Apply Coupon
                </a>
              </p>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Estimate shipping and tax</h3>
                <p>Enter your destination to get a shipping estimate</p>
                <form action="#" className="info">
                  <div className="form-group">
                    <label for="">Country</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label for="country">State/Province</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label for="country">Zip/Postal Code</label>
                    <input
                      type="text"
                      className="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <p>
                <a href="checkout.html" className="btn btn-success py-3 px-4">
                  Estimate
                </a>
              </p>
            </div>
            <div className="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p>
                <a href="#" className="btn btn-success py-3 px-4">
                  Proceed to Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
