import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  useTheme,
  MenuItem,
  Button,
  Select,
  InputLabel,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as yup from "yup";

import { ContactFormData, Contact } from "../../services/contact";

const ContactForm = () => {
  const [completed, setCompleted] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const inquiryReasons = ["Reason #1", "Reason #2", "Reason #3", "Reason #4"];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      capability: "",
      inquiry: 0,
      details: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required("A first name is required"),
      lastName: yup.string().required("A last name is required."),
      email: yup.string().email().required("An email is required."),
      phone: yup.number().required("A phone number is required."),
      company: yup.string().required("A company is required."),
      capability: yup.string().required("A capability is required."),
      inquiry: yup.number().required("An inquiry reason is required."),
      details: yup.string(),
    }),
    onSubmit: async (values) => {
      console.log("NIGGERS");
      try {
        const data = {
          ...values,
          inquiry: inquiryReasons[values.inquiry],
        } as ContactFormData;
        await Contact.addContactData(data);
        setCompleted(true);
      } catch (err) {
        const error = err as Error;
        console.log(error);
      }
    },
  });

  if (!completed) {
    return (
      <>
        <Typography
          variant="h3"
          sx={{ typography: { sm: "h3", xs: "h4" } }}
          gutterBottom
        >
          Contact us
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="company"
                name="company"
                label="Company"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>
            <Grid item xs={matches ? 12 : 6}>
              <TextField
                fullWidth
                id="capability"
                name="capability"
                label="Capability"
                value={formik.values.capability}
                onChange={formik.handleChange}
                error={
                  formik.touched.capability && Boolean(formik.errors.capability)
                }
                helperText={
                  formik.touched.capability && formik.errors.capability
                }
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Select
                fullWidth
                id="inquiry"
                name="inquiry"
                labelId="inquiry-label"
                displayEmpty
                value={formik.values.inquiry}
                onChange={formik.handleChange}
                error={formik.touched.inquiry && Boolean(formik.errors.inquiry)}
              >
                {inquiryReasons.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select> */}
              <TextField
                fullWidth
                select
                id="inquiry"
                name="inquiry"
                label="What are you looking for?"
                value={formik.values.inquiry}
                onChange={formik.handleChange}
                error={formik.touched.inquiry && Boolean(formik.errors.inquiry)}
                helperText={formik.touched.inquiry && formik.errors.inquiry}
              >
                {inquiryReasons.map((value, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {value}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                maxRows={5}
                id="details"
                name="details"
                label="Any comments or questions"
                value={formik.values.details}
                onChange={formik.handleChange}
                error={formik.touched.details && Boolean(formik.errors.details)}
                helperText={formik.touched.details && formik.errors.details}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    );
  } else {
    return (
      <>
        <Typography
          align="center"
          variant="h3"
          sx={{ typography: { sm: "h3", xs: "h4" } }}
          gutterBottom
        >
          Thank you for contacting us!
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          sx={{ typography: { sm: "subtitle1", xs: "subtitle2" } }}
          gutterBottom
        >
          We will reach back to you as soon as possible.
        </Typography>
      </>
    );
  }
};

export default ContactForm;
