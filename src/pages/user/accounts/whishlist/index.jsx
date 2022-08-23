import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../../../assets/bg_1.jpg";

import HeaderComponent from "../../../../components/Header";
import FooterComponent from "../../../../components/Footer";

import "../order/orderDetails.styles.scss";

export default function WhishList() {
  const navigation = useNavigate();
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
                <span>Wishlist</span>
              </p>
              <h1 className="mb-0 bread">Wishlist</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-cart mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th className="slno">&nbsp;</th>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="slno">1</td>
                      <td>#48302</td>
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
                      <td className="slno">2</td>
                      <td>#48302</td>
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
