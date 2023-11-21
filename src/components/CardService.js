import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)`
  ${({ theme }) =>
    `transition:${theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.standard,
    })}; &:hover{transform: scale(1.1)}`}
`;

const CardService = ({ icon, header, discription, imageType }) => {
  return (
    <StyledPaper sx={{ height: "280px", width: "250px", padding: 3 }}>
      <div style={{ display: "flex", gap: "10px" }}>
        {imageType ? <img src={icon} width={60} alt="logo" /> : icon}
        <Typography fontWeight={"bold"} fontSize={20}>
          {header}
        </Typography>
      </div>
      <Typography sx={{ paddingTop: 3 }}>{discription}</Typography>
    </StyledPaper>
  );
};

export default CardService;
