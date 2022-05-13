import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { style } from "@mui/system";

const HeaderStyle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));
const HeaderTitleStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1rem",
  backgroundColor: "#FF523A",
  width: "100%",
  height: "2.3rem",
}));

export { HeaderStyle, HeaderTitleStyle };
