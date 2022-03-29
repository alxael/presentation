import { Box, styled, Typography } from "@mui/material";

const FormBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "30rem",
  height: "30rem",
}));

const ContactForm = () => {
  return (
    <FormBox>
      <Typography variant="h2">Fuck this form</Typography>
    </FormBox>
  );
};

export default ContactForm;
