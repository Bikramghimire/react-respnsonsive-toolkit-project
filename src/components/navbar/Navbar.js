import React, { useEffect } from "react";
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
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCart } from "../../features/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotalCart());
  }, [cartData, dispatch]);
  return (
    <MainBar position="sticky" sx={{ top: "0px", zIndex: 9999 }}>
      <Container maxWidth="xl">
        <NavBar>
          <Link to="/">
            <LogoBar>
              <HomeIcon
                color="primary"
                sx={{ fontSize: { xs: "30px", sm: "50px", md: "70px" } }}
              />
              <TitleStyle
                variant="h5"
                component="h5"
                sx={{ textDecoration: "none" }}
              >
                Online shopping
              </TitleStyle>
            </LogoBar>
          </Link>
          <Link to="/cart">
            <CartBar>
              <ShoppingBagIcon
                color="primary"
                sx={{ fontSize: { xs: "20px", sm: "40px", md: "60px" } }}
              />
              <CountBar>
                <Typography variant="p" component="p">
                  {cartData.cartTotalQuantity}
                </Typography>
              </CountBar>
            </CartBar>
          </Link>
        </NavBar>
      </Container>
    </MainBar>
  );
};

export default Navbar;
