import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ProfileImage from "../../../../assets/person_1.jpg";
import BackgroundImage from "../../../../assets/bg_1.jpg";

import "./profile.styles.scss";
import HeaderComponent from "../../../../components/Header";
import FooterComponent from "../../../../components/Footer";
export default function Profile() {
  const navigation = useNavigate();
  return (
    <div className="profile-section">
      <HeaderComponent />
      <div
        className="profile-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>My Account</span>
              </p>
              <h1 className="mb-0 bread">My Account</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="profile-section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="profile-image">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={ProfileImage}
                    className="card-img-top"
                    alt="profile picture"
                  />
                  <div className="card-body mx-auto">
                    <p className="card-text ">Alexa Xavior</p>
                  </div>
                </div>
              </div>
              <div className="profile-links mt-5" style={{ width: "18rem" }}>
                <div className="border">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="btn btn-nav w-100">
                        <PersonIcon className="icon-tab" />
                        My Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="btn btn-nav w-100">
                        <WorkHistoryIcon className="icon-tab" />
                        Order History
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="btn btn-nav w-100">
                        <FavoriteBorderIcon className="icon-tab" />
                        Wishlist
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="btn btn-nav w-100">
                        <ShoppingCartIcon className="icon-tab" />
                        Cart
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="btn btn-nav w-100 border-0">
                        <PowerSettingsNewIcon className="icon-tab" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div>
                <form action="#" className="billing-form">
                  <h3 className="mb-4 billing-heading">Personal Info</h3>
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="Name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Alexa Xaviour"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="Email"
                          className="form-control"
                          placeholder="alexa1@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="phonenumber">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+91-8745290415"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="location">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Kaloor,  Ernakulam"
                        />
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="streetaddress">Street Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="House number and street name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appartment, suite, unit etc: (optional)"
                        />
                      </div>
                    </div>
                    {/* <!-- <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="towncity">Town / City</label>
                                        <input type="text" className="form-control" placeholder="">
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="postcodezip">Postcode / ZIP *</label>
                                        <input type="text" className="form-control" placeholder="">
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" className="form-control" placeholder="">
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="emailaddress">Email Address</label>
                                        <input type="text" className="form-control" placeholder="">
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col-md-12">
                                    <div className="form-group mt-4">
                                        <div className="radio">
                                            <label className="me-3"><input type="radio" name="optradio"> Create an Account?
                                            </label>
                                            <label><input type="radio" name="optradio"> Ship to different address</label>
                                        </div>
                                    </div>
                                </div>  */}
                  </div>
                  <a href="#" className="btn btn-success py-3 px-4 mt-5">
                    Save Changes
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}
