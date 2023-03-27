import { PublicRoutes, UserKey } from "@/models";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { clearPersistLocalStorage } from "@/helpers/localStorage";
import { useDispatch } from "react-redux";
import { resetUser } from "@/redux/slices/user.slice";

const Logout = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    clearPersistLocalStorage(UserKey);
    dispatch(resetUser);
    // navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return (
    <div>
      <Button onClick={() => logout()}>LOGOUT</Button>
    </div>
  );
};

export default Logout;
