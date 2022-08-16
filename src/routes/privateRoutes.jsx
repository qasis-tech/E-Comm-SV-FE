import { Outlet, Navigate } from "react-router-dom";
import DashboardPage from "../pages/admin/dashboard/mainContainer";

export default function PrivateRouting({ isAdmin }) {
  return (
    <>
      {isAdmin ? (
        <DashboardPage>
          <Outlet />
        </DashboardPage>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
