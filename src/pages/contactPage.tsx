import { styled, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ContactForm from "../components/contactPage/contactForm";

const Main = styled("main")(({ theme }) => ({
  maxWidth: "100vw",
  minHeight: "calc(100vh - 8rem)",
  background: theme.palette.background.default,
}));

const Contact = styled(Box)(({ theme }) => ({
  padding: "5% 10%",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  alignItems: "center",
}));

const FormBox = styled(Box)({
  padding: "7.5%",
});

const ContactPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Main>
      <Contact>
        <Typography
          variant="h3"
          color="primary.contrastText"
          sx={{ typography: { xs: "h4", sm: "h3", md: "h2" } }}
          align={matches ? "center" : "left"}
        >
          It always starts with a conversation.
        </Typography>
      </Contact>
      <FormBox>
        <ContactForm />
      </FormBox>
    </Main>
  );
};

export default ContactPage;
