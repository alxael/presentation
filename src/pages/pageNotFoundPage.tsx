import { styled, Typography, Link } from "@mui/material";
import { ReactComponent as PageNotFoundSvg } from "../svgs/404.svg";

const Main = styled("main")(({ theme }) => ({
  minHeight: "calc(100vh - 6rem)",
  minWidth: "calc(100vw - 2rem)",
  padding: "1rem",
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Svg = styled(PageNotFoundSvg)({
  width: "clamp(300px, 100%, 600px)",
  height: "clamp(300px, 100%, 600px)",
});

const PageNotFoundPage = () => {
  return (
    <Main>
      <Svg />
      <Typography variant="h3" color="textPrimary">
        Oops!
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Sorry we couldn't find this page. But don't worry, you can find plenty
        of other things on the{" "}
        <Link variant="body1" href="/" underline="hover">
          homepage
        </Link>.
      </Typography>
    </Main>
  );
};

export default PageNotFoundPage;
