import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Outlet, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "@/models";

interface IProps {
  privateMode: boolean;
}

export const AuthGuard = ({ privateMode }: IProps) => {
  const userState = useSelector((store: AppStore) => {
    return store.user;
  });
  return userState.name ? (
    privateMode ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
