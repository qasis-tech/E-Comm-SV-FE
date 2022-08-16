import { Outlet, Navigate } from "react-router-dom";
import DashboardPage from "../pages/admin/dashboard/mainContainer";

export default function PrivateRouting({ isAdmin }) {
  return (
    <DashboardPage>
      <Outlet />
    </DashboardPage>
  );
}

{
  /* {isAdmin ? ( */
}
// ) : ( // <Navigate to={"/login"} />
// )}
