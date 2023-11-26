import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Project from "./Project";
import DashboardImage from "../projectsImages/DashBoard.PNG";
import MovieRanking from "../projectsImages/MovieRanking.PNG";
import BirthdayInvite from "../projectsImages/BirthdayInvite.PNG";
import PasswordValidtor from "../projectsImages/PasswordValidator.PNG";
//import ConatctsDotNetMAUI from "../projectsImages/ContactsDotNet.PNG";
import SlightlyTechieBackEnd from "../projectsImages/web-api-access.png";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const projects = [
  {
    name: "Dashboard",
    image: DashboardImage,
    alt: "dashboard",
    source: "https://github.com/lemyoo/Dashboard",
    url: "https://lemyodashboard.netlify.app/",
    visible: true,
  },
  {
    name: "Password Validator",
    image: PasswordValidtor,
    alt: "passwordvalidator",
    source: "https://github.com/lemyoo/password_validator",
    url: "https://passwordvalidator.netlify.app/",
    visible: true,
  },
  /*{
    name: "Contacts DotNet MAUI",
    image: ConatctsDotNetMAUI,
    alt: "contactsdotnetmaui",
    source: "https://github.com/lemyoo/Contacts-With-DotNetMAUI",

    visible: false,
  },*/
  {
    name: "IN MEMORY BLOG WEBAPI",
    image: SlightlyTechieBackEnd,
    alt: "In memory blog webapi",
    source: "https://github.com/lemyoo/SlightlyTechieBackEnd",

    visible: false,
  },
  {
    name: "Movie Ranking",
    image: MovieRanking,
    alt: "movieranking",
    source: "https://github.com/lemyoo/movieranking",
    url: "https://lemyoo.github.io/movieranking/",
    visible: true,
  },
  {
    name: "Birthday Invite",
    image: BirthdayInvite,
    alt: "birthdayinvite",
    source: "https://github.com/lemyoo/birthdayinvite",
    url: "https://lemyoo.github.io/birthdayinvite/",
    visible: true,
  },
];
const Projects = () => {
  return (
    <Div id="projects" style={{ marginTop: "20px" }}>
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
        Projects
      </Typography>
      <Grid container style={{ margin: "auto" }}>
        {projects.map((project, index) => {
          return (
            <Grid item key={index} sx={{ margin: "auto", paddingBottom: 2 }}>
              <Project
                name={project.name}
                image={project.image}
                key={index}
                alt={project.alt}
                source={project.source}
                url={project.url}
                visible={project.visible}
              />
            </Grid>
          );
        })}
      </Grid>
    </Div>
  );
};
export default Projects;
