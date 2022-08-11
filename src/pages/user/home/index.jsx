import { useNavigate } from "react-router-dom";
import "./index.styles.scss";
import CategoryImage from "../../../assets/category.jpg";
import Category1 from "../../../assets/category-1.jpg";
import Category2 from "../../../assets/category-2.jpg";
import Category3 from "../../../assets/category-3.jpg";
import Category4 from "../../../assets/category-4.jpg";
import Product1 from "../../../assets/product-1.jpg";
import product2 from "../../../assets/product-2.jpg";
import Background3 from "../../../assets/bg_3.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const Home = () => {
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
                    <LocalPhoneIcon className="icon-color"/>
                  </div>
                  <span class="text">+ 1235 2355 98</span>
                </div>
                <div class="col-md pr-4 d-flex topper align-items-center">
                  <div class="icon mr-2 d-flex justify-content-center align-items-center">
                    <EmailIcon  className="icon-color"/>
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
      {/* <section id="home-section" class="hero">
		<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active" style="height: 872px;">
						<img src="images/bg_1.jpg" class="d-block w-100" alt="..." />
						<div class="row carousel-caption d-none d-md-block  justify-content-center align-items-center">
							<div class="col-md-12 slider-text text-center">
								<h1 class="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
								<h2 class="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
								<p><a href="#" class="btn btn-success">View Details</a></p>
							</div>

						</div>
				</div>
				<div class="carousel-item" style="height: 872px;">
					<img src="images/bg_2.jpg" class="d-block w-100" alt="..." />
					<div class="carousel-caption d-none d-md-block">
						<div class="col-md-12 slider-text text-center">
							<h1 class="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
							<h2 class="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
							<p><a href="#" class="btn btn-success">View Details</a></p>
						</div>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</section> */}
      <section class="ftco-section ftco-category pt-5 pb-5 mt-5">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="row">
						<div class="col-md-6 order-md-last align-items-stretch d-flex pb-2">
							<div class="category-wrap-2 ftco-animate main-category align-self-stretch d-flex">
								<img src={CategoryImage} alt="Category image" />
								<div class="text text-center">
									<h2>Vegetables</h2>
									<p>Protect the health of every home</p>
									<p><a href="#" class="btn btn-success">Shop now</a></p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="category-wrap ftco-animate mb-4 d-flex align-items-end">
								<img src={Category1} alt="Category Image" />
								<div class="text px-3 py-1 bottom-left">
									<h2 class="mb-0"><a href="#" class=" text-decoration-none">Fruits</a></h2>
								</div>
							</div>
							<div class="category-wrap ftco-animate d-flex align-items-end">
								<img src={Category2} alt="Category image"/>
								<div class="text px-3 py-1">
									<h2 class="mb-0"><a href="#" class=" text-decoration-none">Vegetables</a></h2>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div class="category-wrap ftco-animate mb-4 d-flex align-items-end">
						<img src={Category3} alt="Category image" />
						<div class="text px-3 py-1">
							<h2 class="mb-0"><a href="#" class=" text-decoration-none">Juices</a></h2>
						</div>
					</div>
					<div class="category-wrap ftco-animate d-flex align-items-end">
						<img src={Category4} alt="category image" />
						<div class="text px-3 py-1">
							<h2 class="mb-0"><a href="#" class=" text-decoration-none">Dried</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  <section class="ftco-section mt-5">
		<div class="container">
			<div class="row justify-content-center mb-3 pb-3">
				<div class="col-md-12 heading-section text-center ftco-animate">
					<span class="subheading">Featured Products</span>
					<h2 class="mb-4">Our Products</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="product">
						<a href="#" class="img-prod"><img class="img-fluid" src={Product1}
								alt="Colorlib Template" />
							<span class="status">30% Off</span>
							<div class="overlay"></div>
						</a>
						<div class="text py-3 pb-4 px-3 text-center">
							<h3><a href="#" class=" text-decoration-none">Bell Pepper</a></h3>
							<div class="d-flex">
								<div class="pricing">
									<p class="price"><span class="mr-2 price-dc">$120.00</span><span
											class="price-sale">$80.00</span></p>
								</div>
							</div>
							<div class="bottom-area d-flex px-3">
								<div class="m-auto d-flex">
									<a href="#"
										class="add-to-cart d-flex justify-content-center align-items-center text-center">
										<span><MenuIcon /></span>
									</a>
									<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
										<span><ShoppingCartIcon /></span>
									</a>
									<a href="#" class="heart d-flex justify-content-center align-items-center ">
										<span><FavoriteBorderIcon /></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="product">
						<a href="#" class="img-prod"><img class="img-fluid" src={product2}
								alt="Colorlib Template" />
							<div class="overlay"></div>
						</a>
						<div class="text py-3 pb-4 px-3 text-center">
							<h3><a href="#" class=" text-decoration-none">Strawberry</a></h3>
							<div class="d-flex">
								<div class="pricing">
									<p class="price"><span>$120.00</span></p>
								</div>
							</div>
							<div class="bottom-area d-flex px-3">
								<div class="m-auto d-flex">
									<a href="#"
										class="add-to-cart d-flex justify-content-center align-items-center text-center">
										<span><MenuIcon /></span>
									</a>
									<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
										<span><ShoppingCartIcon /></span>
									</a>
									<a href="#" class="heart d-flex justify-content-center align-items-center ">
										<span><FavoriteBorderIcon /></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>	
		</div>
	</section>
	<section class="ftco-section deal-of-the-day-section mt-5">
		<img src={Background3} alt="Background image" />
		<div class="container">
			<div class="row justify-content-end pt-5">
				<div class="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
					<span class="subheading">Best Price For You</span>
					<h2 class="mb-4">Deal of the day</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
					<h3><a href="#" class="text-decoration-none">Spinach</a></h3>
					<span class="price">$10 <a href="#">now $5 only</a></span>
					<div id="timer" class="d-flex mt-5">
						<div class="time" id="days">-955<span>Days</span></div>
						<div class="time pl-3" id="hours">22<span>Hours</span></div>
						<div class="time pl-3" id="minutes">45<span>minutes</span></div>
						<div class="time pl-3" id="seconds">43<span>seconds</span></div>
					</div>
				</div>
			</div>
		</div>
	</section>
  {/* <footer class="ftco-footer ftco-section pt-5">
		<div class="container">
			<div class="row">
				<div class="mouse">
					<a href="#" class="mouse-icon">
						<div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
					</a>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Vegefoods</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
							<li class="ftco-animate"><a href="#"><span><i class="fa fa-twitter"
											aria-hidden="true"></i></span></a></li>
							<li class="ftco-animate"><a href="#"><span><i class="fa fa-facebook"
											aria-hidden="true"></i></span></a></li>
							<li class="ftco-animate"><a href="#"><span><i class="fa fa-instagram"
											aria-hidden="true"></i></span></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4 ml-md-5">
						<h2 class="ftco-heading-2">Menu</h2>
						<ul class="list-unstyled">
							<li><a href="#" class="py-2 d-block text-decoration-none">Shop</a></li>
							<li><a href="#" class="py-2 d-block text-decoration-none">About</a></li>
							<li><a href="#" class="py-2 d-block text-decoration-none">Journal</a></li>
							<li><a href="#" class="py-2 d-block text-decoration-none">Contact Us</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md-4">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Help</h2>
						<div class="d-flex">
							<ul class="list-unstyled mr-l-5 pr-l-3 mr-4">
								<li><a href="#" class="py-2 d-block text-decoration-none">Shipping Information</a></li>
								<li><a href="#" class="py-2 d-block text-decoration-none">Returns &amp; Exchange</a>
								</li>
								<li><a href="#" class="py-2 d-block text-decoration-none">Terms &amp; Conditions</a>
								</li>
								<li><a href="#" class="py-2 d-block text-decoration-none">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Have a Questions?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li><span><i class="fa fa-map-marker" aria-hidden="true"></i></span><span
										class="text">203 Fake St. Mountain
										View, San Francisco, California, USA</span></li>
								<li><a href="#" class="text-decoration-none"><span><i class="fa fa-phone"
												aria-hidden="true"></i></span><span class="text">+2 392 3929
											210</span></a></li>
								<li><a href="#" class="text-decoration-none"><span><i class="fa fa-envelope"
												aria-hidden="true"></i></span><span
											class="text">info@yourdomain.com</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">

					<p>
						Copyright &copy; All rights reserved | This template
						is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="#"
							class="text-decoration-none" target="_blank" style="color: #82ae46;">Colorlib</a>
						
					</p>
				</div>
			</div>
		</div>
	</footer> */}
    </div>
  );
};

export default Home;
