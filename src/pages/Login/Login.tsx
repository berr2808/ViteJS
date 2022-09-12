import { getMorty } from "@/services/auth.services";
import { useDispatch } from "react-redux";
import { createUser, resetUser } from "@/redux/slices/user.slice";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { useEffect } from "react";
import { clearPersistLocalStorage } from "@/helpers/localStorage";
import { UserKey } from "@/models/user.type";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearPersistLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      let response = await getMorty();
      dispatch(createUser({ ...response, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      <Typography variant="h2"> LOGIN PERRO</Typography>
      <Button color="primary" onClick={() => login()}>
        Entrar
      </Button>
    </div>
  );
};

export default Login;
