import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled, Typography, Divider, Button } from "@mui/material";
import { useTheme } from "@mui/material";

import { ReactComponent as DataSvg1 } from "../svgs/data1.svg";
import { ReactComponent as DataSvg2 } from "../svgs/data2.svg";

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

const Contact = styled(Box)(({ theme }) => ({
  padding: "5%",
  width: "100%",
  background: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  flexDirection: "column",
  justifyCOntent: "flex-start",
  alignItems: "center",
}));

export interface MainPageProps {
  setShowNavbar: (value: boolean) => void;
}

const MainPage = (props: MainPageProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const contentCards: ContentCardProps[] = [
    {
      title: "Cloud Engineering",
      description: [
        `Only when organizations are assured of a stable IT infrastructure, a reliable, scalable, agile, and secure foundation, can they even dream big on behalf of their clients.`,
        `Even amazing products and services, that are truly customer-centric, can fail when they are riddled with performance, scalability, and security issues. Hence the need for reliable Cloud Engineering.`,
        `With its expertise across all the Private/Public cloud providers, FrightFlex can recommend the right choice/combination of platforms that can yield sustainable results for your business.`,
        `Regardless of where you are in your cloud journey, FrightFlex can provide with you with cloud migration, modernization, optimization support required to make the most out of your cloud investments.`,
      ],
      alignment: "right",
      textAlignment: "left",
      media: DataSvg1,
    },
    {
      title: "Data and Analytics",
      description: [
        `Data engineering and analytics services ensure smooth and rapid movement of data – from its origin to places of consumption, with minimum distortion.`,
        `Organizations can make qualified, data-driven decisions for driving business outcomes including revenue generation, customer experience and operational efficiency.`,
        `With a ton of options available to perform this process, organizations are stumbling their way through their architectural decisions. And more often than not, the ‘obvious choice’ need not be the right choice for your business.`,
        `With deep expertise and vast experience, both in commercial and open source tools FrightFlex can help you explore these options and make technology work to meet your unique data engineering and analytics needs.`,
      ],
      alignment: "left",
      textAlignment: "left",
      media: DataSvg2,
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

  useEffect(() => {
    if (scrollPosition < window.innerHeight / 3) {
      props.setShowNavbar(false);
    } else {
      props.setShowNavbar(true);
    }
  }, [props, props.setShowNavbar, scrollPosition]);

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
        <Typography variant="h5" align="center" color="primary.contrastText" gutterBottom>
          Attract More, Retain More
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
      <Contact>
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
        <Button
          variant="outlined"
          sx={{
            filter: "brightness(0) invert(1)"
          }}
          size="large"
          onClick={() => {
            setTimeout(() => {
              navigate("/contact");
            }, theme.transitions.duration.short);
          }}
        >
          Contact us
        </Button>
      </Contact>
    </Main>
  );
};

export default MainPage;
