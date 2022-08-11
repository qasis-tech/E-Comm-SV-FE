import { useNavigate } from "react-router-dom";
import "./product.details.styles.scss";

export default function CustomerProductDetails() {
  const navigation = useNavigate();
  return (
    <div>
      <div class="py-1 top-section">
        <div class="container">
          <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div class="col-lg-12 d-block">
              <div class="row d-flex">
                <div class="col-md pr-4 d-flex topper align-items-center">
                  <div class="icon mr-2 d-flex justify-content-center align-items-center">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <span class="text">+ 1235 2355 98</span>
                </div>
                <div class="col-md pr-4 d-flex topper align-items-center">
                  <div class="icon mr-2 d-flex justify-content-center align-items-center">
                    <i class="fa fa-paper-plane-o"></i>
                  </div>
                  <span class="text">youremail@email.com</span>
                </div>
                <div class="col-md pr-4 d-flex topper align-items-center text-lg-right">
                  <span class="text">
                    3-5 Business days delivery &amp; Free Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container">
          <div>
            <a class="navbar-brand" href="index.html">
              Vegefoods
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="oi oi-menu"></span> Menu
            </button>
          </div>

          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="ftco-nav"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item d-flex">
                <div class="input-group mb-4 mt-3 border-bottom">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-describedby="button-addon3"
                    class="form-control bg-none border-0 fs-6"
                  />
                  <div class="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      class="btn btn-link text-success"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li class="nav-item active">
                <a href="index.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="#">
                    Shop
                  </a>
                  <a class="dropdown-item" href="#">
                    Wishlist
                  </a>
                  <a class="dropdown-item" href="#">
                    Single Product
                  </a>
                  <a class="dropdown-item" href="#">
                    Cart
                  </a>
                  <a class="dropdown-item" href="#">
                    Checkout
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Contact
                </a>
              </li>
              <li class="nav-item cta cta-colored">
                <a href="#" class="nav-link">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  [0]
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="hero-wrap hero-bread"
        style="background-image: url('images/bg_1.jpg');"
      >
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
              <div style="height: 65%;">
                <a href="images/product-1.jpg" class="image-popup">
                  <img
                    src="images/product-1.jpg"
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div class="row">
                <div class="col-4">
                  <img
                    src="images/product-12.jpg"
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div class="col-4">
                  <img
                    src="images/product-7.jpg"
                    class="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div class="col-4">
                  <img
                    src="images/product-5.jpg"
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
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a href="#">
                    <span>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </a>
                </p>
                <p class="text-left me-4">
                  <a href="#" class="text-decoration-none" style="color: #000;">
                    100 <span style="color: #bbb;">Rating</span>
                  </a>
                </p>
                <p class="text-left">
                  <a href="#" class="text-decoration-none" style="color: #000;">
                    500 <span style="color: #bbb;">Sold</span>
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
                nothing the copy said could convince her and so it didn’t take
                long until.
              </p>
              <div class="row mt-4">
                <div class="col-md-6 mb-3">
                  <div class="form-group d-flex">
                    <div class="select-wrap">
                      <div class="icon">
                        <span class="fa fa-angle-down"></span>
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
                      <i class="fa fa-minus"></i>
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
                      <i class="fa fa-plus"></i>
                    </button>
                  </span>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                  <p style="color: #000;">600 kg available</p>
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
                    src="images/product-1.jpg"
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
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <i class="fa fa-shopping-cart"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <i class="fa fa-heart" aria-hidden="true"></i>
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
                    src="images/product-2.jpg"
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
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <i class="fa fa-shopping-cart"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <i class="fa fa-heart" aria-hidden="true"></i>
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
                    src="images/product-3.jpg"
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
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <i class="fa fa-shopping-cart"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <i class="fa fa-heart" aria-hidden="true"></i>
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
                    src="images/product-4.jpg"
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
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="buy-now d-flex justify-content-center align-items-center mx-1"
                      >
                        <span>
                          <i class="fa fa-shopping-cart"></i>
                        </span>
                      </a>
                      <a
                        href="#"
                        class="heart d-flex justify-content-center align-items-center "
                      >
                        <span>
                          <i class="fa fa-heart" aria-hidden="true"></i>
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
    </div>
  );
}
