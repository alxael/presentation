import { Box, TextField, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginFormBox = styled(Box)(({ theme }) => ({
  width: "clamp(15rem, 50%, 20rem)",
  height: "clamp(20rem, 75%, 30rem)",
  padding: "1rem",
  borderRadius: "0.5rem",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
}));

export interface SignInFormProps {
  signInHandler: (email: string, password: string) => void;
}

const SignInForm = (props: SignInFormProps) => {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("A valid email is required.")
      .required("A email is required."),
    password: yup
      .string()
      .required("A password is required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "The password must contain at least 8 characters, a lowercase letter, an uppercase letter, a number and a special character."
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.signInHandler(values.email, values.password);
      navigate("/");
    },
  });

  return (
    <LoginFormBox>
      <Typography color="textPrimary" variant="h3" gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{
            mb: 2,
          }}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          sx={{
            mb: 2,
          }}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </LoginFormBox>
  );
};

export default SignInForm;
