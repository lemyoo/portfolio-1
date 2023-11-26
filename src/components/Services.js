import { Grid, Typography } from "@mui/material";
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
    discription:
      "It encompasses various specialties and roles, such as software developement, systems analyst, software architect, and quality assurance. My responsibilities and tasks of a software engineer can vary depending on the specific role, industry, and the nature of the project that I may work on.",
  },
  {
    icon: logo,
    img: true,
    header: "React Developer",
    discription:
      "I specialize in using the React JavaScript library for building user interfaces. It follows a declarative approach, which allows me to describe how the UI should look for a given state, and React takes care of updating the DOM (Document Object Model) to match that state.",
  },
  {
    icon: <LanguageIcon fontSize="large" style={{ margin: "auto" }} />,
    img: false,
    header: "Web Developer",
    discription:
      "I am professional who specializes in the development of applications that are run on web browsers. Web development can broadly be categorized into two main types: front-end development and back-end development.",
  },
  {
    icon: <ApiIcon fontSize="large" style={{ margin: "auto" }} />,
    img: false,
    header: "Web API Development",
    discription:
      "I develop APIs (Application Programming Interfaces) in the context of web development, a Web API specifically refers to an API that is exposed over the web, allowing different software systems to communicate with each other using standard web protocols. This is a type of back-end development ",
  },
  {
    icon: dotnetlogo,
    img: true,
    header: ".Net Web API Development",
    discription:
      "I specialize in using the .NET framework for building applications. the type of applications are WEB APIs and .NET MAUI",
  },
];

const Services = () => {
  return (
    <div id="services" style={{ marginTop: "20px" }}>
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
        Services
      </Typography>
      <Grid container style={{ margin: "auto" }}>
        {servicesdata.map((service, index) => {
          return (
            <Grid item key={index} sx={{ margin: "auto", paddingBottom: 2 }}>
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
