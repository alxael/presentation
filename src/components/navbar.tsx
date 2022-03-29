import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  styled,
  useTheme,
  Fade,
} from "@mui/material";

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

  return (
    <>
      {props.show && (
        <Fade in={props.show} unmountOnExit>
          <AppNavbar position="sticky" hidden={props.show}>
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                color="textPrimary"
                noWrap
                sx={{ ml: 2 }}
              >
                FrightFlex
              </Typography>
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
