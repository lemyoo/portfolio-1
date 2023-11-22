import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Link, Typography, TextField, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Formik } from "formik";
import { enqueueSnackbar } from "notistack";

const ContactMe = () => {
  const form = useRef();

  return (
    <div id="contactme" style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        textAlign={"left"}
        sx={{
          textDecoration: "overline",
          paddingBottom: "10px",
          paddingTop: "20px",
          marginLeft: "20px",
        }}>
        Get In Touch
      </Typography>
      <Formik
        initialValues={{
          user_email: "",
          user_name: "",
          user_subject: "",
          user_number: "",
          user_message: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.user_email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
            errors.email = "Invalid email address";
          }
          if (!values.user_name) {
            errors.user_name = "Required";
          }
          if (!values.user_number) {
            errors.user_number = "Required";
          }
          if (!values.user_subject) {
            errors.user_subject = "Required";
          }
          if (!values.user_message) {
            errors.user_message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);

          emailjs
            .sendForm("service_z0p3szh", "template_59lxiwt", form.current, "R_OLhcbn0XL9szHZ6")
            .then(
              (result) => {
                console.log(result.text);
                enqueueSnackbar("message sent");
                setSubmitting(false);
                resetForm({ values: "" });
              },
              (error) => {
                console.log(error.text);
                setSubmitting(false);
              }
            );
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form ref={form} onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={4} sm={8} xs={10} style={{ margin: "auto", paddingBottom: "10px" }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  required
                  name="user_name"
                  value={values.user_name}
                />
              </Grid>

              <Grid item sm={4} xs={10} style={{ margin: "auto", paddingBottom: "10px" }}>
                <TextField
                  label="Your Mobile Number"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_number}
                />
              </Grid>
              <Grid item md={12} sm={0} xs={0}></Grid>
              <Grid item md={4} sm={8} xs={10} style={{ margin: "auto", paddingBottom: "10px" }}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_email}
                  type="email"
                />
              </Grid>
              <Grid item md={4} sm={8} xs={10} style={{ margin: "auto", paddingBottom: "10px" }}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                  name="user_subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_subject}
                />
              </Grid>

              <Grid item xs={10} sx={{ margin: "auto" }}>
                <TextField
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.user_message}
                  name="user_message"
                />
                {/*errors.message && touched.message && errors.message*/}
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Stack>
                  <Button
                    variant="contained"
                    style={{ margin: "auto" }}
                    type="submit"
                    disabled={isSubmitting}>
                    Send
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", marginTop: 5 }}>
                <Link
                  href="https://github.com/lemyoo/"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener">
                  <GitHubIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/emmanuel-m-lartey-406479173/"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener">
                  <LinkedInIcon />
                </Link>
                <Link
                  href="mailto:emmanuellarteymohammed@gmail.com"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener">
                  <MailIcon />
                </Link>
                <Link
                  href=" tel:+233556815956"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener">
                  <LocalPhoneIcon />
                </Link>
                <Link
                  href="https://twitter.com/eemLartey"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener">
                  <TwitterIcon />
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMe;
