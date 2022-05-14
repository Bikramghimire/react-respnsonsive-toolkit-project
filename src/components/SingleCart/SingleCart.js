import React, { useState } from "react";
import {
  CounterButton,
  CounterInput,
  ProductCounter,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductStyle,
} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  increaseCart,
  removeFromCart,
} from "../../features/cartSlice";
import { IconButton } from "@mui/material";

const SingleCart = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleDeleteCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const [cartQuantity, setCartQuantity] = useState(cartItem.cartQuantity);
  const increaseCartQuatity = (id) => {
    setCartQuantity((prev) => prev + 1);
    dispatch(increaseCart(id));
  };
  const decreaseCartQuatity = (id) => {
    if (cartQuantity > 0) {
      setCartQuantity((prev) => prev - 1);
      dispatch(decrementCart(id));
    }
  };
  return (
    <ProductStyle>
      <ProductImage src={cartItem.image} alt="nnn"></ProductImage>
      <ProductName variant="p">{cartItem.title}</ProductName>
      <ProductCounter>
        <CounterButton onClick={() => increaseCartQuatity(cartItem.id)}>
          +
        </CounterButton>
        <CounterInput
          size="small"
          variant="outlined"
          value={cartQuantity}
        ></CounterInput>
        <CounterButton onClick={() => decreaseCartQuatity(cartItem.id)}>
          -
        </CounterButton>
      </ProductCounter>
      <ProductPrice variant="p" component="div">
        {`${cartItem.cartQuantity} * ${cartItem.price}`}= $
        {cartItem.cartQuantity * cartItem.price}
      </ProductPrice>
      <IconButton aria-label="delete" color="secondary">
        <DeleteIcon onClick={() => handleDeleteCart(cartItem.id)} />
      </IconButton>
    </ProductStyle>
  );
};

export default SingleCart;
