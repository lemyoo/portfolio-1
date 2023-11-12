import { Grid } from "@mui/material";
import CardService from "./CardService";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

const servicesdata = [
  {
    icon: <DeveloperBoardIcon fontSize="large" style={{ margin: "auto", paddingLeft: "15px" }} />,
    header: "Software Development",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nose irure dolor",
  },
  { icon: "icon", header: "Software Developmen", discription: "discrieption" },
];

const Services = () => {
  return (
    <div id="services" style={{ marginTop: "20px" }}>
      <Grid container spacing={3} style={{ margin: "auto" }}>
        {servicesdata.map((service, index) => {
          return (
            <Grid item>
              <CardService
                icon={service.icon}
                header={service.header}
                discription={service.discription}
                key={index}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Services;
