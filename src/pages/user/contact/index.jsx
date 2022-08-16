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
      <div
        className="contact-wrap hero-bread"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Contact</span>
              </p>
              <h1 className="mb-0 bread">Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <section className=" contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920" className="text-decoration-none">
                    + 1235 2355 98
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a
                    href="mailto:info@yoursite.com"
                    className="text-decoration-none"
                  >
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span>{" "}
                  <a href="#" className="text-decoration-none">
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-success py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white w-100">
                <iframe
                  className="gmap_iframe"
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.191478576506!2d76.29049121479413!3d10.001036692850482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc50d3aead97511ff!2zMTDCsDAwJzAzLjciTiA3NsKwMTcnMzMuNyJF!5e0!3m2!1sen!2sin!4v1656927503908!5m2!1sen!2sin"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
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
