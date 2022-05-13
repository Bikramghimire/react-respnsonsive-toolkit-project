import { Container } from "@mui/material";
import React from "react";
import SingleCart from "../SingleCart/SingleCart";
import { HeaderStyle, HeaderTitleStyle } from "./style";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const { cartItems } = cartData;
  console.log(cartItems);
  return (
    <Container maxWidth="xl">
      <HeaderStyle variant="h5" component="div" sx={{ marginTop: "1rem" }}>
        Shopping Cart
      </HeaderStyle>
      <HeaderTitleStyle>
        <HeaderStyle variant="p" component="div" sx={{ marginLeft: "4rem" }}>
          Product
        </HeaderStyle>
        <HeaderStyle variant="p" component="div">
          Quantity
        </HeaderStyle>
        <HeaderStyle variant="p" component="div" sx={{ marginRight: "4rem" }}>
          Price
        </HeaderStyle>
      </HeaderTitleStyle>
      {cartItems.map((item) => (
        <SingleCart cartItem={item} />
      ))}
    </Container>
  );
};

export default Cart;
