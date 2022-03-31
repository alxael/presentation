import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  useTheme,
  MenuItem,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as yup from "yup";

interface InputProps {
  type: "textSimple" | "textMultiple" | "select" | "phoneNumber";
  name: string;
  label: string;
  textMultiple?: {
    maxRows: number;
  };
  select?: {
    options: string[];
  };
}

const ContactForm = () => {
  const [completed, setCompleted] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      capability: "",
      inquiry: "",
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
    onSubmit: (values) => {
      setCompleted(true);
      console.log(values);
    },
  });

  const formInputFields: InputProps[] = [
    {
      type: "textSimple",
      name: "firstName",
      label: "First Name",
    },
    {
      type: "textSimple",
      name: "lastName",
      label: "Last Name",
    },
    {
      type: "textSimple",
      name: "email",
      label: "Email",
    },
    {
      type: "phoneNumber",
      name: "phone",
      label: "Phone number",
    },
    {
      type: "textSimple",
      name: "company",
      label: "Company",
    },
    {
      type: "textSimple",
      name: "capability",
      label: "Capability",
    },
    {
      type: "select",
      name: "inquiry",
      label: "What are you looking for?",
      select: {
        options: ["Reason #1", "Reason #2", "Reason #3", "Reason #4"],
      },
    },
    {
      type: "textMultiple",
      name: "details",
      label: "Any comments or questions?",
      textMultiple: {
        maxRows: 5,
      },
    },
  ];

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
            {formInputFields.map((value, index) => {
              return (
                <Grid
                  item
                  xs={
                    matches ||
                    value.type === "textMultiple" ||
                    value.type === "select"
                      ? 12
                      : 6
                  }
                  key={index}
                >
                  <TextField
                    fullWidth
                    select={value.type === "select"}
                    multiline={value.type === "textMultiple"}
                    maxRows={
                      value.type === "textMultiple" &&
                      value.textMultiple !== undefined
                        ? value.textMultiple.maxRows
                        : undefined
                    }
                    id={value.name}
                    name={value.name}
                    label={value.label}
                    value={(formik.values as any)[value.name]}
                    onChange={formik.handleChange}
                    error={
                      (formik.touched as any)[value.name] &&
                      Boolean((formik.errors as any)[value.name])
                    }
                    helperText={
                      (formik.touched as any)[value.name] &&
                      (formik.errors as any)[value.name]
                    }
                  >
                    {value.type === "select" &&
                      value.select !== undefined &&
                      value.select.options.map((value, index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {value}
                          </MenuItem>
                        );
                      })}
                  </TextField>
                </Grid>
              );
            })}
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
