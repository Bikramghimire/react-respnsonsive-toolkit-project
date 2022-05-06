import { Box, styled, Typography } from "@mui/material";
import utilities from "../../utili/index";

const MainBar = styled(Box)(({ theme }) => ({
  boxShadow: "0 4px 2px -2px rgba(0,0,0,.2)",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 5px",
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));
const LogoBar = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
const TitleStyle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
const CartBar = styled(Box)(({ theme }) => ({
  position: "relative",
  marginRight: "16px",
  [theme.breakpoints.down("sm")]: {},
}));
const CountBar = styled(Box)(({ theme }) => ({
  border: "1px solid red",
  width: "20px",
  height: "30px",
  borderRadius: "50%",
  position: "absolute",
  top: "10px",
  left: "55px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "10px",
    height: "20px",
    top: "10px",
    left: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    width: "10px",
    height: "16px",
    top: "1px",
    left: "20px",
  },
}));

export { NavBar, LogoBar, TitleStyle, CartBar, MainBar, CountBar };
