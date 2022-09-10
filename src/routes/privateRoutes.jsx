import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

import DashboardPage from "../pages/admin/dashboard/mainContainer";
import RouterList from "../routes/routerList";
import { authCheck } from "./auth";

export default function PrivateRouting() {
  const auth = async () => {
    const res = await authCheck();
    return res?.isAdmin ?? true;
  };

  if (auth()) {
    return (
      <DashboardPage>
        <Outlet />
      </DashboardPage>
    );
  } else return <Navigate to={`${RouterList.user.login}`} />;
}
