import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "../styles/footer.styles.scss";

const FooterComponent = () => {
    return(
		<div>
        <footer class="ftco-footer ftco-section pt-5">
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
							<li class="ftco-animate"><a href="#"><span><TwitterIcon/></span></a></li>
							<li class="ftco-animate"><a href="#"><span><FacebookIcon/></span></a></li>
							<li class="ftco-animate"><a href="#"><span><InstagramIcon/></span></a></li>
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
								<li><span><LocationOnIcon/></span><span
										class="text">203 Fake St. Mountain
										View, San Francisco, California, USA</span></li>
								<li><a href="#" class="text-decoration-none"><span><LocalPhoneIcon/></span><span class="text">+2 392 3929
											210</span></a></li>
								<li><a href="#" class="text-decoration-none"><span><MailOutlineIcon/></span><span
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
							class="text-decoration-none" target="_blank" style={{color: "#82ae46"}}>Colorlib</a>
						
					</p>
				</div>
			</div>
		</div>
	</footer> 
	<a href="#" class="cart_float" target="_blank"> 
	<ShoppingCartIcon className="cart-icon"/>
  </a>
  </div>
	
    );
};

export default FooterComponent;