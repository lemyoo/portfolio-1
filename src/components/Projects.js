import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
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
    </Div>
  );
};
export default Projects;
