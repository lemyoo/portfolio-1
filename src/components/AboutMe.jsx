import { Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <div style={{ height: "100%", margin: "10px" }}>
      <Typography
        variant="h5"
        textAlign={"left"}
        fontWeight={"bold"}
        sx={{ textDecoration: "overline", paddingBottom: "10px", paddingTop: "20px" }}
        md={{ textDecoration: "underline", paddingBottom: "30px" }}>
        About Me
      </Typography>
      <Typography textAlign={"left"}>
        Greetings, and thank you for visiting my website. I proudly hail from the vibrant nation of
        Ghana. My journey into the world of technology began at the esteemed University of Ghana,
        where I pursued a degree in Computer Engineering. During my time at the University of Ghana,
        I honed my skills and knowledge in both software and hardware aspects of computing. The
        rigorous curriculum, coupled with hands-on projects, laid the foundation for my passion and
        proficiency in software engineering.
      </Typography>
      <br />
      <Typography textAlign={"left"}>
        Now, as a software engineer, I embark on a professional journey characterized by a
        commitment to excellence and a passion for creating impactful solutions. This portfolio
        serves as a testament to my dedication, showcasing a collection of projects and experiences
        that reflect my technical expertise and problem-solving capabilities.
      </Typography>
      <br />
      <Typography textAlign={"left"}>
        Join me as I navigate the ever-evolving landscape of software engineering, leveraging on my
        education, experience, and enthusiasm to contribute meaningfully to the world of technology.
      </Typography>

      <Typography textAlign={"left"} style={{ marginTop: 20, marginBottom: 60 }}>
        MY SKILLS: REACT, NODE, JS, C#, DOTNET (WEBAPI & MAUI).
      </Typography>
    </div>
  );
};

export default AboutMe;
