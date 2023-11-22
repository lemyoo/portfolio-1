import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";

const Project = ({ name, image, alt, url, source }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} />
      <CardMedia component="img" height="194" image={image} alt={alt} />
      <CardContent style={{ textAlign: "center" }}>
        <Link
          underline="none"
          href={source}
          style={{ backgroundColor: "green", padding: 5, borderRadius: 5, marginRight: "20px" }}>
          Source Code
        </Link>
        <Link
          underline="none"
          href={url}
          style={{ backgroundColor: "red", padding: 5, borderRadius: 5, marginLeft: "10px" }}>
          Check it out
        </Link>
      </CardContent>
    </Card>
  );
};

export default Project;
