import { Typography } from "@mui/material";
import myimage from "../assets/1699681646072.jpg";

const MyImageAndName = () => {
  return (
    <div>
      <img src={myimage} alt="me" width={200} style={{ borderRadius: "25%", marginTop: "30px" }} />
      <Typography variant="h4" sx={{ paddingTop: "20px" }}>
        Emmanuel Mohammed Lartey
      </Typography>
    </div>
  );
};
export default MyImageAndName;
