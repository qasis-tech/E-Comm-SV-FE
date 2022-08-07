import { useNavigate } from "react-router-dom";

export default function CustomerProductDetails() {
  const navigation = useNavigate();
  return (
    <div>
      Product Details Page in Custoer Page
      <br />
      <button className="btn btn-primary" onClick={() => navigation("/")}>
        Home
      </button>
    </div>
  );
}
