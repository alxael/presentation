import { styled, Typography, Box } from "@mui/material";
import ContactForm from "../components/contactPage/contactForm";

const Main = styled("main")(({ theme }) => ({
  maxWidth: "100vw",
  background: theme.palette.background.default,
}));

const Contact = styled(Box)(({ theme }) => ({
  padding: "10% 15%",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  alignItems: "center",
}));

const FormBox = styled(Box)({
  padding: "5%",
});

const ContactPage = () => {
  return (
    <Main>
      <Contact>
        <Typography variant="h2" color="primary.contrastText" sx={{ typography: { sm: "h2", xs: "h4" } }}>
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
