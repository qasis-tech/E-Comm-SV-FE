import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

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
      <div
        className="about-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>AboutUs</span>
              </p>
              <h1 className="mb-0 bread">Aboutus</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section about-section bg-light mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center align-items-center about-image-section">
              <img src={AboutImage} alt="about image" />
            </div>
            <div className="col-md-7  wrap-about ftco-animate">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">
                    Welcome to Vegefoods an eCommerce website
                  </h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <p>
                  <a href="#" className="btn btn-success">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section p-5">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <LocalShippingIcon />
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <span>On order over $100</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                  <RefreshIcon />
                </div>
                <div className="media-body">
                  <h3 className="heading">Always Fresh</h3>
                  <span>Product well package</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                  <EmojiEventsIcon />
                </div>
                <div className="media-body">
                  <h3 className="heading">Superior Quality</h3>
                  <span>Quality Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                  <SupportAgentIcon />
                </div>
                <div className="media-body">
                  <h3 className="heading">Support</h3>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-counter"
        id="section-counter"
        style={{ backgroundImage: `url(${BackgroundImage1})` }}
      >
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="10000">
                        10,000
                      </strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="100">
                        100
                      </strong>
                      <span>Branches</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="1000">
                        1,000
                      </strong>
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="100">
                        100
                      </strong>
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
};

export default AboutUs;
