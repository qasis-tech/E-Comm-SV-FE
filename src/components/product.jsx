import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Product1 from "../assets/product-1.jpg";

const ProductComponent = () => {
  return (
    <div className="col-md-6 col-lg-3 ">
      <div className="product">
        <a href="#" className="img-prod">
          <img className="img-fluid" src={Product1} alt="Colorlib Template" />
          <div>
            <div className="status-left">30% Off</div>
            <div className="status-right">Featured</div>
          </div>
          <div className="overlay"></div>
        </a>
        <div className="text py-3 pb-4 px-3 text-center">
          <h3>
            <a href="#" className=" text-decoration-none">
              Bell Pepper
            </a>
          </h3>
          <div className="d-flex">
            <div className="pricing">
              <p className="price">
                <span className="me-3 price-dc ">$120.00</span>
                <span className="price-sale">$80.00</span>
              </p>
            </div>
          </div>
          <div className="bottom-area d-flex ">
            <a className="heart d-flex justify-content-center align-items-center pointer">
              <span>
                <FavoriteBorderIcon />
              </span>
            </a>
            <a className="buy-now d-flex justify-content-center align-items-center pointer">
              <span>
                <ShoppingCartIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
