import { PrivateRoutes, Roles } from "@/models";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/store";

interface IProps {
  rol: Roles;
}

export const RoleGuard = ({ rol }: IProps) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
};
