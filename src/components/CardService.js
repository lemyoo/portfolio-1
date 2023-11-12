import { Typography, Paper } from "@mui/material";

const CardService = ({ icon, header, discription }) => {
  return (
    <Paper sx={{ height: "250px", width: "250px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        {icon}
        <Typography fontWeight={"bold"} fontSize={20}>
          {header}
        </Typography>
      </div>
      <Typography>{discription}</Typography>
    </Paper>
  );
};

export default CardService;
