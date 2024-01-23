import React from "react";
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Link } from "@mui/material";

const smallSmallProjects = [
  {
    url: "https://eml-dantey.netlify.app",
    name: "Dantey Classics",
    discreption: "The aim is to show case the works of the Fashion Designer.",
  },
];

const OnGoingProjects = () => {
  return (
    <div id="ongoingprojects">
      <Typography
        variant="h5"
        textAlign={"left"}
        fontWeight={"bold"}
        sx={{
          textDecoration: "overline",
          paddingBottom: "10px",
          paddingTop: "20px",
          marginLeft: "20px",
        }}>
        OnGoingProjects
      </Typography>
      <Grid container justifyContent={"center"}>
        {smallSmallProjects.map((small, index) => {
          return (
            <Grid item key={index} xs={11} sm={5} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia>
                  <iframe
                    src={small.url}
                    height={150}
                    width={345}
                    title="DanteyClassics"
                    allowFullScreen={true}></iframe>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {small.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {small.discreption}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    underline="none"
                    href={small.url}
                    style={{
                      backgroundColor: "#f50057",
                      padding: 5,
                      borderRadius: 5,
                      marginLeft: "10px",
                      color: "white",
                      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                    }}>
                    Check it out
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OnGoingProjects;
