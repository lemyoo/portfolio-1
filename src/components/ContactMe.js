import { Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactMe = () => {
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
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }} spacing={10}>
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
    </div>
  );
};

export default ContactMe;
