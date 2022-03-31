import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  styled,
  useTheme,
  Fade,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      {props.show && (
        <Fade in={props.show} unmountOnExit>
          <AppNavbar position="sticky" hidden={props.show}>
            <Toolbar disableGutters>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/");
                  }, theme.transitions.duration.shorter);
                }}
                sx={{ ml: 2, textTransform: "none" }}
              >
                <Typography variant="h5" color="textPrimary" noWrap>
                  FrightFlex
                </Typography>
              </Button>

              <Spacer />
              <Switch
                sx={{ mr: 2 }}
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
