import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Product1 from "../../../assets/product-2.jpg";
import Product2 from "../../../assets/product-6.jpg";
import "./cart.styles.scss";
import "../../../styles/button.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";

export default function CartPage() {
  const navigation = useNavigate();
  return (
    <div className="cart-container">
      <HeaderComponent />
      <div class="hero-wrap hero-bread">
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
      <section class="ftco-cart mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ftco-animate">
              <div class="cart-list">
                <table class="table">
                  <thead class="thead-primary">
                    <tr class="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td class="product-remove">
                        <a href="#">
                          <CloseIcon />
                        </a>
                      </td>

                      <td class="image-prod">
                        <div
                          class="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={Product1}
                            style={{ height: "50%", width: "100%" }}
                          />
                        </div>
                      </td>

                      <td class="product-name">
                        <h3>Bell Pepper</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries
                        </p>
                      </td>

                      <td class="price">$4.90</td>

                      <td class="quantity">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            class="quantity form-control input-number"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>

                      <td class="total">$4.90</td>
                    </tr>

                    <tr class="text-center">
                      <td class="product-remove">
                        <a href="#">
                          <CloseIcon />
                        </a>
                      </td>

                      <td class="image-prod">
                        <div
                          class="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={Product2}
                            style={{ height: "50%", width: "100%" }}
                          />
                        </div>
                      </td>

                      <td class="product-name">
                        <h3>Bell Pepper</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries
                        </p>
                      </td>

                      <td class="price">$15.70</td>

                      <td class="quantity">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            class="quantity form-control input-number"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>

                      <td class="total">$15.70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div class="cart-total mb-3">
                <h3>Coupon Code</h3>
                <p>Enter your coupon code if you have one</p>
                <form action="#" class="info">
                  <div class="form-group">
                    <label for="">Coupon code</label>
                    <input
                      type="text"
                      class="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <p>
                <a href="checkout.html" class="btn btn-success py-3 px-4">
                  Apply Coupon
                </a>
              </p>
            </div>
            <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div class="cart-total mb-3">
                <h3>Estimate shipping and tax</h3>
                <p>Enter your destination to get a shipping estimate</p>
                <form action="#" class="info">
                  <div class="form-group">
                    <label for="">Country</label>
                    <input
                      type="text"
                      class="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="country">State/Province</label>
                    <input
                      type="text"
                      class="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="country">Zip/Postal Code</label>
                    <input
                      type="text"
                      class="form-control text-left px-3"
                      placeholder=""
                    />
                  </div>
                </form>
              </div>
              <p>
                <a href="checkout.html" class="btn btn-success py-3 px-4">
                  Estimate
                </a>
              </p>
            </div>
            <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
              <div class="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p class="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p class="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p class="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p class="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p>
                <a href="#" class="btn btn-success py-3 px-4">
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
