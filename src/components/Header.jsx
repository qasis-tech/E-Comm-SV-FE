import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

import "../styles/header.styles.scss";
const HeaderComponent = () => {
  const navigate = useNavigate();
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
      class="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <div>
          <span class="navbar-brand" onClick={() => navigate("/")}>
            Vegefoods
          </span>

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
                    <SearchIcon />
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
              <a class="nav-link" onClick={() => navigate("about")}>
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
                <ShoppingCartIcon />
                [0]
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <PersonIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default HeaderComponent;
