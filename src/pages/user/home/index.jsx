import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigation = useNavigate();
  return (
    <div>
      Home...... in Customer
      <br />
      <button
        className="btn btn-primary"
        onClick={() => navigation("product-details")}
      >
        Product Details Page
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => navigation("cart")}>
        Cart
      </button>
    </div>
  );
};

export default Home;
