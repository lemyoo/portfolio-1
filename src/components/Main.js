import React from "react";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyImageAndName from "./MyImageAndName";
import AboutMe from "./AboutMe";

const Div = styled("div")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
function Main() {
  return (
    <Div>
      <NavBar />
      <Grid container style={{ paddingTop: "90px" }}>
        <Grid item sm={4} xs={12}>
          <MyImageAndName />
        </Grid>
        <Grid item sm={6} xs={12}>
          <AboutMe />
        </Grid>
      </Grid>
    </Div>
  );
}

export default Main;
