import { Grid, Link, Typography, TextField, Button, Stack } from "@mui/material";
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
        <Grid item md={3} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
          <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth />
        </Grid>

        <Grid item md={3} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
          <TextField id="filled-basic" label="Your Number" variant="outlined" fullWidth />
        </Grid>

        <Grid item md={3} xs={10} sx={{ margin: "auto", paddingBottom: "10px" }}>
          <TextField id="standard-basic" label="Your Email" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={10} sx={{ margin: "auto" }}>
          <TextField
            id="standard-basic"
            label="Your Message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Stack>
            <Button variant="contained" style={{ margin: "auto" }}>
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
    </div>
  );
};

export default ContactMe;
