import { useNavigate } from "react-router-dom";
export default function CartPage() {
  const navigation = useNavigate();
  return (
    <div>
      CArt Page
      <button className="btn btn-primary" onClick={() => navigation("/")}>
        Home
      </button>
    </div>
  );
}
