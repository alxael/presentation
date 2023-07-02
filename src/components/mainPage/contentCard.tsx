import {
  styled,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";

const CardInfo = styled("div")(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[300],
  borderRadius: "0.5rem",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export interface ContentCardProps {
  title: string;
  description: string[];
  alignment: "left" | "right";
  textAlignment: "left" | "right";
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
        <Typography
          variant="h3"
          align={matches ? "center" : props.alignment}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Grid container spacing={2}>
          {props.description.map((value, index) => {
            return (
              <Grid item xs={matches ? 12 : 6} key={index}>
                <Item key={index}>
                  <Typography
                    variant="body1"
                    color={theme.palette.text.primary}
                    align={matches ? "center" : props.textAlignment}
                  >
                    {value}
                  </Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </CardInfo>
    </Card>
  );
};

export default ContentCard;
