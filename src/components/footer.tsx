import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const AppFooter = styled(AppBar)(({ theme }) => ({
  height: "4rem",
  background: theme.palette.background.default,
}))

const Footer = () => {
  return (
    <AppFooter position="static">
      <Toolbar disableGutters>
        <Typography variant="h6" color="textPrimary" noWrap sx={{ ml: 2 }}>
          &copy; {new Date().getFullYear()} FrightFlex All Rights Reserved
        </Typography>
      </Toolbar>
    </AppFooter>
  );
};

export default Footer;
