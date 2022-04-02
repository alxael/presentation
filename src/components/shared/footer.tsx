import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const AppFooter = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
}));

const Footer = () => {
  return (
    <AppFooter position="sticky">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          noWrap
          sx={{ ml: 2, typography: { xs: "body1", sm: "h6" } }}
        >
          &copy; {new Date().getFullYear()} FrightFlex All Rights Reserved
        </Typography>
      </Toolbar>
    </AppFooter>
  );
};

export default Footer;
