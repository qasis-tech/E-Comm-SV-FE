import { useNavigate } from "react-router-dom";

import ProductImage1 from "../../../../assets/product-2.jpg";
import ProductImage2 from "../../../../assets/product-6.jpg";
import BackgroundImage from "../../../../assets/bg_1.jpg";

import "./orderDetails.styles.scss";
import HeaderComponent from "../../../../components/Header";
import FooterComponent from "../../../../components/Footer";

export default function OrderDetails() {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };
  return (
    <div className="order-details-section">
      <HeaderComponent />
      <div
        className="order-details-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Order Details</span>
              </p>
              <h1 className="mb-0 bread">Order Details</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-cart mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <h2>Order : #86302</h2>
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th className="slno">&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>1</td>
                      <td className="image-prod">
                        <div
                          className="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={ProductImage1}
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

                      <td className="price">12th Dec'15</td>

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
                      <td>
                        <a href="#" className="btn btn-primary">
                          Return Order
                        </a>
                      </td>
                    </tr>

                    <tr className="text-center">
                      <td>2</td>
                      <td className="image-prod">
                        <div
                          className="col-2 mx-auto"
                          style={{ width: "50%", height: "50%" }}
                        >
                          <img
                            src={ProductImage2}
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

                      <td className="price">12th Dec'15</td>

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
                      <td>
                        <a href="#" className="btn btn-primary">
                          Return Order
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
