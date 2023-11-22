import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Link, Typography, TextField, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Formik } from "formik";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_z0p3szh", "template_59lxiwt", form.current, "R_OLhcbn0XL9szHZ6").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
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
            errors.name = "Required";
          }
          if (!values.user_number) {
            errors.number = "Required";
          }
          if (!values.user_subject) {
            errors.subject = "Required";
          }
          if (!values.user_message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {}}>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container>
            <Grid item md={4} sm={8} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                fullWidth
                required
                name="user_name"
              />
            </Grid>

            <Grid item sm={4} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
              <TextField
                id="filled-basic"
                label="Your Number"
                variant="outlined"
                fullWidth
                required
                name="user_number"
              />
            </Grid>
            <Grid item md={12} sm={0} xs={0}></Grid>
            <Grid item md={4} sm={8} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="outlined"
                fullWidth
                required
                name="user_email"
              />
            </Grid>
            <Grid item md={4} sm={8} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
              <TextField
                id="standard-basic"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                name="user_subject"
              />
            </Grid>

            <Grid item xs={10} sx={{ margin: "auto" }}>
              <TextField
                id="standard-basic"
                label="Your Message"
                variant="outlined"
                multiline
                rows={5}
                fullWidth
                required
                name="user_massage"
              />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Stack>
                <Button variant="contained" style={{ margin: "auto" }} type="submit">
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
      </Formik>
    </div>
  );
};

export default ContactMe;
