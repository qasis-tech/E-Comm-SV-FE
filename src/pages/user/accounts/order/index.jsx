import { useNavigate } from "react-router-dom";

import ProductImage1 from "../../../../assets/product-2.jpg";
import ProductImage2 from "../../../../assets/product-6.jpg";
import BackgroundImage from "../../../../assets/bg_1.jpg";

import "./orderDetails.styles.scss";
import HeaderComponent from "../../../../components/Header";
import FooterComponent from "../../../../components/Footer";

export default function OrderList() {
  const navigation = useNavigate();
  return (
  <div className="order-details-section">
    <HeaderComponent/>
    <div class="order-details-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Order</span>
              </p>
              <h1 class="mb-0 bread">Order List</h1>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section ftco-cart mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="cart-list">
                        <table class="table">
                            <thead class="thead-primary">
                                <tr class="text-center">
                                    <th class="slno">&nbsp;</th>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr class="text-center">
                                    <td class="slno">
                                        1
                                    </td>
                                    <td>
                                        #48302
                                    </td>
                                    <td class="price">12th Dec'15</td>

                                    <td class="quantity">
                                        <div class="input-group mb-3">
                                            <input type="text" name="quantity"
                                                class="quantity form-control input-number" value="1" min="1" max="100"/>
                                        </div>
                                    </td>

                                    <td class="total">$4.90</td>
                                    <td><a href="#" class="btn btn-primary">Return Order</a></td>
                                </tr>
                                <tr class="text-center">
                                    <td class="slno">
                                        2
                                    </td>
                                    <td>
                                        #48302
                                    </td>
                                    <td class="price">12th Dec'15</td>

                                    <td class="quantity">
                                        <div class="input-group mb-3">
                                            <input type="text" name="quantity"
                                                class="quantity form-control input-number" value="1" min="1" max="100"/>
                                        </div>
                                    </td>

                                    <td class="total">$4.90</td>
                                    <td><a href="#" class="btn btn-primary">Return Order</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterComponent/>
  </div>
    );
}
