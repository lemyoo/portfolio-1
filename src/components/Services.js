import { Grid } from "@mui/material";
import CardService from "./CardService";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../logo.svg";
import dotnetlogo from "../dotnet.svg";
import ApiIcon from "@mui/icons-material/Api";

const servicesdata = [
  {
    icon: <DeveloperBoardIcon fontSize="large" style={{ margin: "auto" }} />,
    img: false,
    header: "Software Engineer",
    discription: "This  ",
  },
  {
    icon: logo,
    img: true,
    header: "React Developer",
    discription: "discrieption",
  },
  {
    icon: <LanguageIcon fontSize="large" style={{ margin: "auto" }} />,
    img: false,
    header: "Web developer",
    discription: "discrieption",
  },
  {
    icon: <ApiIcon fontSize="large" style={{ margin: "auto" }} />,
    img: false,
    header: "Web API Development",
    discription: "discrieption ",
  },
  {
    icon: dotnetlogo,
    img: true,
    header: "DotNet Web API Development",
    discription: "discrieption",
  },
];

const Services = () => {
  return (
    <div id="services" style={{ marginTop: "20px" }}>
      <Grid container spacing={3} style={{ margin: "auto" }}>
        {servicesdata.map((service, index) => {
          return (
            <Grid item key={index}>
              <CardService
                icon={service.icon}
                header={service.header}
                discription={service.discription}
                imageType={service.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Services;
