import { Outlet } from "react-router-dom";
import DashboardPage from "../pages/admin/dashboard/mainContainer";

export default function PrivateRouting() {
  return (
    <DashboardPage>
      <Outlet />
    </DashboardPage>
  );
}
