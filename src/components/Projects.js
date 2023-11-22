import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Project from "./Project";
import DashboardImage from "../projectsImages/DashBoard.PNG";
import MovieRanking from "../projectsImages/MovieRanking.PNG";

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
  },
  {
    name: "Movie Ranking",
    image: MovieRanking,
    alt: "movieranking",
    source: "https://github.com/lemyoo/Dashboard",
    url: "https://lemyodashboard.netlify.app/",
  },
];
const Projects = () => {
  return (
    <Div id="projects" style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        textAlign={"left"}
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
              />
            </Grid>
          );
        })}
      </Grid>
    </Div>
  );
};
export default Projects;
