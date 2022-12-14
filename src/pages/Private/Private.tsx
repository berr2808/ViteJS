import RoutesWithNotFound from "@/helpers/RoutesWithNotFound";
import { PrivateRoutes } from "@/models";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Home = lazy(() => import("./home/Home"));
const Invoice = lazy(() => import("./invoice/Invoice"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.INVOICE} element={<Invoice />} />
    </RoutesWithNotFound>
  );
};

export default Private;
