import { useNavigate } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RefreshIcon from '@mui/icons-material/Refresh';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import AboutImage from "../../../assets/about.jpg";
import BackgroundImage from "../../../assets/bg_1.jpg";
import BackgroundImage1 from "../../../assets/bg_3.jpg";


import "./about.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";
const AboutUs = () => {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };
  return (
    <div className="about-container">
      <HeaderComponent />
      <div class="about-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>AboutUs</span>
              </p>
              <h1 class="mb-0 bread">Aboutus</h1>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section about-section bg-light mb-4">
        <div class="container">
            <div class="row">
                <div class="col-md-5 d-flex justify-content-center align-items-center">
                    <img src={AboutImage} alt="about image" />
                </div>
                <div class="col-md-7  wrap-about ftco-animate">
                    <div class="heading-section-bold mb-4 mt-md-5">
                        <div class="ml-md-0">
                            <h2 class="mb-4">Welcome to Vegefoods an eCommerce website</h2>
                        </div>
                    </div>
                    <div class="pb-md-5">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.</p>
                        <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious
                            Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their
                            agency, where they abused her for their.</p>
                        <p><a href="#" class="btn btn-success">Shop now</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ftco-section p-5">
        <div class="container">
            <div class="row no-gutters ftco-services">
                <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services mb-md-0 mb-4">
                        <div class="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                            <LocalShippingIcon/>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Free Shipping</h3>
                            <span>On order over $100</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services mb-md-0 mb-4">
                        <div class="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                            <RefreshIcon/>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Always Fresh</h3>
                            <span>Product well package</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services mb-md-0 mb-4">
                        <div class="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                           <EmojiEventsIcon/>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Superior Quality</h3>
                            <span>Quality Products</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services mb-md-0 mb-4">
                        <div class="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                            <SupportAgentIcon/>
                        </div>
                        <div class="media-body">
                            <h3 class="heading">Support</h3>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ftco-section ftco-counter" id="section-counter"
       style={{ backgroundImage: `url(${BackgroundImage1})` }} >
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="10000">10,000</strong>
                                    <span>Happy Customers</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="100">100</strong>
                                    <span>Branches</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="1000">1,000</strong>
                                    <span>Partner</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="100">100</strong>
                                    <span>Awards</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <FooterComponent />
      </div>
  );
}

export default AboutUs;
