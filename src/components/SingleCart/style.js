import { Box, Button, styled, TextField, Typography } from "@mui/material";

const ProductStyle = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));
const ProductImage = styled("img")(({ theme }) => ({
  height: "200px",
  width: "250px",
  [theme.breakpoints.down("md")]: {
    height: "150px",
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "75px",
    width: "120px",
  },
}));
const ProductName = styled(Typography)(({ theme }) => ({}));
const ProductCounter = styled(Box)(({ theme }) => ({}));
const CounterButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "small",
  },
}));
const CounterInput = styled(TextField)(({ theme }) => ({
  width: "4rem",
  margin: "0px 3px",
  [theme.breakpoints.down("md")]: {
    width: "3rem",
    margin: "0px 2px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "2rem",
    margin: "0px 2px",
  },
}));
const ProductPrice = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
  },
}));
export {
  ProductStyle,
  ProductImage,
  ProductName,
  ProductCounter,
  CounterButton,
  CounterInput,
  ProductPrice,
};
