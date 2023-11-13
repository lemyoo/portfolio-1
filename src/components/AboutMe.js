import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <div style={{ height: "100%", margin: "10px" }}>
      <Typography
        variant="h5"
        textAlign={"left"}
        sx={{ textDecoration: "overline", paddingBottom: "10px", paddingTop: "20px" }}
        md={{ textDecoration: "underline", paddingBottom: "30px" }}>
        About Me
      </Typography>
      <Typography textAlign={"left"}>
        Greetings, and thank you for visiting my software engineering portfolio. I am proudly
        hailing from the vibrant nation of Ghana. My journey into the world of technology began at
        the esteemed University of Ghana, where I pursued a degree in Computer Engineering.
      </Typography>
      <Typography textAlign={"left"}>
        During my time at the University of Ghana, I honed my skills and knowledge in both software
        and hardware aspects of computing. The rigorous curriculum, coupled with hands-on projects,
        laid the foundation for my passion and proficiency in software engineering. The
        multicultural environment at the university provided a diverse backdrop for collaborative
        learning and innovative thinking.
      </Typography>
      <Typography textAlign={"left"}>
        Now, as a software engineer with a comprehensive education from one of Ghana's premier
        institutions, I embark on a professional journey characterized by a commitment to excellence
        and a passion for creating impactful solutions. This portfolio serves as a testament to my
        dedication, showcasing a collection of projects and experiences that reflect my technical
        expertise and problem-solving capabilities.
      </Typography>

      <Typography textAlign={"left"}>
        Join me as I navigate the ever-evolving landscape of software engineering, leveraging my
        education, experience, and enthusiasm to contribute meaningfully to the world of technology.
      </Typography>

      <Typography textAlign={"left"} style={{ marginTop: 20, marginBottom: 60 }}>
        MY SKILLS: REACT, NODE, JS, C# ,DOTNET (WEBAPI & MAUI)
      </Typography>
    </div>
  );
};

export default AboutMe;
