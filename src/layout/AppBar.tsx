import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { FC } from "react";
import Nav from "./nav";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
interface IProps {
  open?: boolean;
  children?: JSX.Element;
  handleDrawerOpen: Function;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppHeader: FC<IProps> = (props) => {
  const { children, open } = props;
  return (
    <AppBar position="fixed" open={open}>
      <Nav {...props} />
      {children}
    </AppBar>
  );
};
export default AppHeader;
