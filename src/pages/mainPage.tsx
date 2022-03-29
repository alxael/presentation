import { useEffect, useState } from "react";
import {
  Box,
  styled,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useTheme } from "@mui/material";

import { ReactComponent as SomeRandomSvg } from "../svgs/404.svg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

const Main = styled("main")(({ theme }) => ({
  maxWidth: "100vw",
  minHeight: "100vh",
  background: theme.palette.background.default,
}));

const Hero = styled(Box)(({ theme }) => ({
  maxWidth: "100vw",
  height: "100vh",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Card = styled(Box)(({ theme }) => ({
  padding: "5%",
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5rem",
}));

const CardInfo = styled("div")(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const CardMedia = styled(SomeRandomSvg)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Contact = styled(Box)(({ theme }) => ({
  padding: "5%",
  background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  flexDirection: "column",
  justifyCOntent: "flex-start",
  alignItems: "center",
}));

const MainPage = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleContactFormClose = () => {
    setIsContactFormOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Main>
      <Navbar show={scrollPosition > theme.typography.fontSize * 25} />
      <Hero>
        <Typography sx={{ typography: { sm: "h1", xs: "h2" } }} align="center">
          FrightFlex
        </Typography>
        <Typography variant="subtitle1" align="center">
          We turn your vision into reality.
        </Typography>
      </Hero>
      <Card>
        <CardInfo>
          <Typography variant="h3" align="right">
            Reason #1 to business with us
          </Typography>
          <Typography variant="body1" align="right" flexWrap={"wrap"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur erat nisl, sit amet placerat turpis congue id. Mauris
            cursus interdum nisl ut euismod. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque placerat vulputate nisi,
            in venenatis magna posuere in. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Etiam et malesuada eros. Nulla eu nulla
            tristique, posuere lacus eget, rutrum ipsum. Quisque urna quam,
            euismod eget tempor quis, suscipit et ex. Curabitur mollis porttitor
            ullamcorper. Suspendisse non ullamcorper justo. Maecenas pulvinar
            posuere massa, ac pharetra elit imperdiet sit amet.
          </Typography>
        </CardInfo>
        <CardMedia />
      </Card>
      <Divider />
      <Card>
        <CardMedia />
        <CardInfo>
          <Typography variant="h3" align="left">
            Reason #2 to business with us
          </Typography>
          <Typography variant="body1" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur erat nisl, sit amet placerat turpis congue id. Mauris
            cursus interdum nisl ut euismod. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque placerat vulputate nisi,
            in venenatis magna posuere in. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Etiam et malesuada eros. Nulla eu nulla
            tristique, posuere lacus eget, rutrum ipsum. Quisque urna quam,
            euismod eget tempor quis, suscipit et ex. Curabitur mollis porttitor
            ullamcorper. Suspendisse non ullamcorper justo. Maecenas pulvinar
            posuere massa, ac pharetra elit imperdiet sit amet.
          </Typography>
        </CardInfo>
      </Card>
      <Divider />
      <Contact>
        <Typography variant="h3" gutterBottom>
          Let's talk about how we could work together.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            setIsContactFormOpen(true);
          }}
        >
          Contact us
        </Button>
      </Contact>
      <Footer />
      <Dialog open={isContactFormOpen} onClose={handleContactFormClose}>
        <DialogTitle>Contact us</DialogTitle>
        <DialogContent>Fuck this form.</DialogContent>
      </Dialog>
    </Main>
  );
};

export default MainPage;
