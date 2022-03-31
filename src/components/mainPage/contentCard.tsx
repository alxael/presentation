import {
  styled,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const CardInfo = styled("div")(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export interface ContentCardProps {
  title: string;
  description: string;
  alignment: "left" | "right";
  media: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const ContentCard = (props: ContentCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const CardMedia = styled(props.media)(({ theme }) => ({
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const Card = styled(Box)(({ theme }) => ({
    padding: "clamp(3rem, 5%, 10rem)",
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: props.alignment === "left" ? "row" : "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "5rem",
  }));

  return (
    <Card>
      <CardMedia />
      <CardInfo>
        <Typography variant="h3" align={matches ? "center" : props.alignment}>
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          align={matches ? "center" : props.alignment}
        >
          {props.description}
        </Typography>
      </CardInfo>
    </Card>
  );
};

export default ContentCard;
