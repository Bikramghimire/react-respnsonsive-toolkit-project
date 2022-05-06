import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CartBar,
  CountBar,
  LogoBar,
  MainBar,
  NavBar,
  TitleStyle,
} from "./style";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <MainBar>
      <Container maxWidth="xl">
        <NavBar position="sticky">
          <Link to="/">
            <LogoBar>
              <HomeIcon
                color="primary"
                sx={{ fontSize: { xs: "30px", sm: "50px", md: "70px" } }}
              />
              <TitleStyle variant="h5" component="h5">
                Online shopping
              </TitleStyle>
            </LogoBar>
          </Link>

          <CartBar>
            <ShoppingBagIcon
              color="primary"
              sx={{ fontSize: { xs: "20px", sm: "40px", md: "60px" } }}
            />
            <CountBar>
              <Typography variant="p" component="p">
                3
              </Typography>
            </CountBar>
          </CartBar>
        </NavBar>
      </Container>
    </MainBar>
  );
};

export default Navbar;
