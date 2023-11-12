import { Typography } from "@mui/material";
import myimage from "../assets/1699681646072.jpg";

const MyImageAndName = () => {
  return (
    <div>
      <img src={myimage} alt="me" width={200} style={{ borderRadius: "50%" }} />
      <Typography variant="h4">Emmanuel Mohammed Lartey</Typography>
    </div>
  );
};
export default MyImageAndName;
