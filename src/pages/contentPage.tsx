import {
  Box,
  Divider,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Fragment } from "react";
import ContentCard, { ContentCardProps } from "../components/mainPage/contentCard";

const Main = styled("main")(({ theme }) => ({
  maxWidth: "100vw",
  minHeight: "calc(100vh - 8rem)",
  background: theme.palette.background.default,
}));

const Contact = styled(Box)(({ theme }) => ({
  padding: "5% 10%",
  minHeight: "200px",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  alignItems: "center",
}));

export interface ContentPageProps {
  title: string;
  contentCards: ContentCardProps[];
}

const ContentPage = (props: ContentPageProps) => {
  const theme = useTheme();

  return (
    <Main>
      <Contact>
        <Typography
          variant="h3"
          color="primary.contrastText"
          sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }}
          align="center"
        >
          {props.title}
        </Typography>
      </Contact>
      {props.contentCards.map((value, index) => {
        return (
          <Fragment key={index}>
            <ContentCard {...value} />
            <Divider />
          </Fragment>
        );
      })}
    </Main>
  );
};

export default ContentPage;
