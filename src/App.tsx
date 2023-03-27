import { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter, Navigate } from "react-router-dom";
import { Logout } from "./components/Logout";
import { AuthGuard } from "./guards";
import { RoutesWithNotFound } from "./helpers";
import { PrivateRoutes, PublicRoutes, Roles, userEmptyState } from "./models";
import { AppStore } from "./redux/store";
import { RoleGuard } from "./guards/role.guard";

function App() {
  const Login = lazy(() => import("./pages/Login/Login"));
  const Private = lazy(() => import("./pages/Private/Private"));
  const Dashboard = lazy(() => import("./pages/Private/dashboard/Dashboard"));

  return (
    <div className="App">
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Logout />
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateMode={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

