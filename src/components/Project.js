import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";

const Project = ({ name, image, alt, url, source, visible }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} />
      <CardMedia component="img" height="194" image={image} alt={alt} />
      <CardContent style={{ textAlign: "center" }}>
        <Link
          underline="none"
          href={source}
          style={{
            backgroundColor: "#4caf50",
            padding: 5,
            borderRadius: 5,
            marginRight: "20px",
            color: "white",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
          }}>
          Source Code
        </Link>
        {visible ? (
          <Link
            underline="none"
            href={url}
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
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Project;
