import { Container } from "@mui/material";
import React, { useEffect } from "react";
import SingleCart from "../SingleCart/SingleCart";
import {
  HeaderStyle,
  HeaderTitleStyle,
  SubTotalStyle,
  SubTotalText,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCart } from "../../features/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cartData;
  useEffect(() => {
    dispatch(getTotalCart());
  }, [cartData, dispatch]);
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
        <SingleCart cartItem={item} key={item.id} />
      ))}
      <SubTotalStyle>
        <SubTotalText variant="h5" component="div">
          SubTotal :
        </SubTotalText>
        <SubTotalText variant="h5" component="div">
          $ {cartData.cartTotalAmount}
        </SubTotalText>
      </SubTotalStyle>
    </Container>
  );
};

export default Cart;
