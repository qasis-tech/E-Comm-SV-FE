import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ProfileImage from "../../../../assets/person_1.jpg";
import BackgroundImage from "../../../../assets/bg_1.jpg";

import "./profile.styles.scss";
import HeaderComponent from "../../../../components/Header";
import FooterComponent from "../../../../components/Footer";
export default function Profile() {
  const navigation = useNavigate();
  return (
  <div className="profile-section">
    <HeaderComponent/>
    <div class="profile-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>My Account</span>
              </p>
              <h1 class="mb-0 bread">My Account</h1>
            </div>
          </div>
        </div>
      </div>
      <section class="profile-section mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="profile-image">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={ProfileImage} class="card-img-top" alt="profile picture"/>
                            <div class="card-body mx-auto">
                              <p class="card-text ">Alexa Xavior</p>
                            </div>
                          </div>
                    </div>
                    <div class="profile-links mt-5" style={{width: "18rem"}}>
                        <div class="border">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="btn btn-nav w-100"><PersonIcon className="icon-tab"/>My Profile</a>
                                </li>
                                <li class="nav-item">
                                  <a href="#" class="btn btn-nav w-100"><WorkHistoryIcon className="icon-tab"/>Order History</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="btn btn-nav w-100"><FavoriteBorderIcon className="icon-tab"/>Wishlist</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="btn btn-nav w-100"><ShoppingCartIcon className="icon-tab"/>Cart</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="btn btn-nav w-100 border-0"><PowerSettingsNewIcon className="icon-tab"/>Logout</a>
                                </li>
                              </ul>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div>
                        <form action="#" class="billing-form">
                            <h3 class="mb-4 billing-heading">Personal Info</h3>
                            <div class="row align-items-end">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="Name">Name</label>
                                        <input type="text" class="form-control" placeholder="Alexa Xaviour"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="Email" class="form-control" placeholder="alexa1@gmail.com"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phonenumber">Phone Number</label>
                                        <input type="text" class="form-control" placeholder="+91-8745290415"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="location">Location</label>
                                        <input type="text" class="form-control" placeholder="Kaloor,  Ernakulam"/>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="streetaddress">Street Address</label>
                                        <input type="text" class="form-control" placeholder="House number and street name"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control"
                                            placeholder="Appartment, suite, unit etc: (optional)"/>
                                    </div>
                                </div>
                                {/* <!-- <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="towncity">Town / City</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="postcodezip">Postcode / ZIP *</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="emailaddress">Email Address</label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <div class="form-group mt-4">
                                        <div class="radio">
                                            <label class="me-3"><input type="radio" name="optradio"> Create an Account?
                                            </label>
                                            <label><input type="radio" name="optradio"> Ship to different address</label>
                                        </div>
                                    </div>
                                </div>  */}
                            </div>
                            <a href="#" class="btn btn-success py-3 px-4 mt-5">Save Changes</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterComponent/>
    </div>
  );
}
