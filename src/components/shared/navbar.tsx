import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  styled,
  useTheme,
  Fade,
  Button,
  useMediaQuery,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import NavDrawer from "./navDrawer";

const AppNavbar = styled(AppBar)(({ theme }) => ({
  height: "4rem",
  background: theme.palette.background.default,
}));

const Spacer = styled("span")({
  flex: "1 1 auto",
});

export interface NavbarProps {
  show: boolean;
}

const Navbar = (props: NavbarProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <>
      {props.show && (
        <Fade in={props.show} unmountOnExit>
          <AppNavbar position="sticky" hidden={props.show}>
            <Toolbar disableGutters>
              {matches && (
                <NavDrawer/>
              )}
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/");
                  }, theme.transitions.duration.shorter);
                }}
                sx={{ mx: 2, textTransform: "none" }}
              >
                <Typography variant="h5" color="textPrimary" noWrap>
                  FrightFlex
                </Typography>
              </Button>
              {!matches && (
                <>
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/cloudEngineering");
                      }, theme.transitions.duration.shorter);
                    }}
                    sx={{ mx: 2, textTransform: "none" }}
                  >
                    <Typography variant="h6" color="textPrimary">
                      Cloud engineering
                    </Typography>
                  </Button>
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/dataAndAnalytics");
                      }, theme.transitions.duration.shorter);
                    }}
                    sx={{ mx: 2, textTransform: "none" }}
                  >
                    <Typography variant="h6" color="textPrimary">
                      Data and Analytics
                    </Typography>
                  </Button>
                </>
              )}

              <Spacer />
              {!matches && (
                <Button
                  variant="text"
                  color="inherit"
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/contact");
                    }, theme.transitions.duration.shorter);
                  }}
                  sx={{ mx: 2, textTransform: "none" }}
                >
                  <Typography variant="h6" color="textPrimary" noWrap>
                    Contact
                  </Typography>
                </Button>
              )}
              <Switch
                sx={{ mx: 2 }}
                checked={theme.palette.mode === "light"}
                onChange={(theme as any).changeTheme}
              />
            </Toolbar>
          </AppNavbar>
        </Fade>
      )}
    </>
  );
};

export default Navbar;
