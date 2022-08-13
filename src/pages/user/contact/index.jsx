import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../../assets/bg_1.jpg";


import "./contact.styles.scss";
import HeaderComponent from "../../../components/Header";
import FooterComponent from "../../../components/Footer";

const ContactUs = () => {
  const navigation = useNavigate();
  const style = { backgroundImage: "url('../../../assets/bg_1.jpg')" };
  return (
    <div className="contact-container">
      <HeaderComponent />
      <div class="contact-wrap hero-bread" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Contact</span>
              </p>
              <h1 class="mb-0 bread">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <section class=" contact-section bg-light">
        <div class="container">
          <div class="row d-flex mb-5 contact-info">
            <div class="w-100"></div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920" class="text-decoration-none">
                    + 1235 2355 98
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a
                    href="mailto:info@yoursite.com"
                    class="text-decoration-none"
                  >
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Website</span>{" "}
                  <a href="#" class="text-decoration-none">
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="row block-9">
            <div class="col-md-6 order-md-last d-flex">
              <form action="#" class="bg-white p-5 contact-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-success py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 d-flex">
              <div id="map" class="bg-white w-100">
                <iframe
                  class="gmap_iframe"
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.191478576506!2d76.29049121479413!3d10.001036692850482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc50d3aead97511ff!2zMTDCsDAwJzAzLjciTiA3NsKwMTcnMzMuNyJF!5e0!3m2!1sen!2sin!4v1656927503908!5m2!1sen!2sin"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};
export default ContactUs;
