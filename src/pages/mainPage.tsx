import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled, Typography, Divider, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material";

import { ReactComponent as SomeRandomSvg } from "../svgs/404.svg";
import Footer from "../components/mainPage/footer";
import ContentCard, {
  ContentCardProps,
} from "../components/mainPage/contentCard";

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

const Contact = styled(ButtonBase)(({ theme }) => ({
  padding: "5%",
  width: "100%",
  background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  flexDirection: "column",
  justifyCOntent: "flex-start",
  alignItems: "center",
}));

const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme();

  const contentCards: ContentCardProps[] = [
    {
      title: "Reason #1 you should work with us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ante dolor. Ut ut sagittis metus, pretium pulvinar ligula. Nulla bibendum tortor auctor augue varius, et maximus magna dictum. Pellentesque vel turpis pellentesque, pretium velit a, pharetra neque. Aenean blandit ornare ipsum eu consectetur. Etiam convallis efficitur accumsan. Phasellus maximus rhoncus auctor. Maecenas faucibus lobortis ligula ut venenatis. Nullam sit amet nibh non risus lobortis sollicitudin. Nam tristique efficitur ante, porttitor facilisis diam vehicula ut. Mauris cursus enim dolor, et sagittis diam scelerisque nec.",
      alignment: "right",
      media: SomeRandomSvg,
    },
    {
      title: "Reason #2 you should work with us",
      description:
        "Pellentesque eu orci mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut felis et neque vulputate facilisis vel sed elit. Maecenas odio diam, dictum at vestibulum sed, convallis egestas turpis. Suspendisse pretium eros in nulla iaculis pharetra. Cras faucibus ipsum in suscipit aliquet. Phasellus rutrum lacus sodales, iaculis nisl sed, maximus diam. Etiam porttitor pulvinar justo eu pretium. Aliquam aliquet metus magna, in mollis nisi vehicula eget.",
      alignment: "left",
      media: SomeRandomSvg,
    },
  ];

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Main>
      <Hero>
        <Typography
          sx={{ typography: { sm: "h1", xs: "h2" } }}
          color="primary.contrastText"
          align="center"
        >
          FrightFlex
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary.contrastText"
        >
          We turn your vision into reality.
        </Typography>
      </Hero>
      {contentCards.map((value, index) => {
        return (
          <Fragment key={index}>
            <ContentCard {...value} />
            <Divider />
          </Fragment>
        );
      })}
      <Contact
        onClick={() => {
          navigate("/contact");
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="primary.contrastText"
          sx={{
            typography: {
              xs: "h4",
              sm: "h3",
            },
          }}
          gutterBottom
        >
          Let's talk about how we could work together.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="primary.contrastText"
          gutterBottom
        >
          Contact us
        </Typography>
      </Contact>
      <Footer />
    </Main>
  );
};

export default MainPage;
