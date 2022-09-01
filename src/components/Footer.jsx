import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../styles/footer.styles.scss";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="ftco-footer ftco-section pt-5">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vegefoods</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href="#">
                      <span>
                        <TwitterIcon />
                      </span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span>
                        <FacebookIcon />
                      </span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span>
                        <InstagramIcon />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block text-decoration-none">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block text-decoration-none">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block text-decoration-none">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li>
                      <a href="#" className="py-2 d-block text-decoration-none">
                        Shipping Information
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block text-decoration-none">
                        Returns &amp; Exchange
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block text-decoration-none">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block text-decoration-none">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span>
                        <LocationOnIcon />
                      </span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li style={{ marginTop: "1em" }}>
                      <a href="#" className="text-decoration-none">
                        <span>
                          <LocalPhoneIcon />
                        </span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <span>
                          <MailOutlineIcon />
                        </span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; All rights reserved
                {/* <i className="icon-heart color-danger" aria-hidden="true"></i>{" "}
                by{" "}
                <a
                  href="#"
                  className="text-decoration-none"
                  target="_blank"
                  style={{ color: "#82ae46" }}
                >
                  Colorlib
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
      <a onClick={() => navigate("/cart")} className="cart_float">
        <ShoppingCartIcon className="cart-icon" />
      </a>
    </div>
  );
};

export default FooterComponent;
