import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigation = useNavigate();
  return (
    <div>
      Profile Page
      <button className="btn btn-primary" onClick={() => navigation("/")}>
        Home
      </button>
    </div>
  );
}
