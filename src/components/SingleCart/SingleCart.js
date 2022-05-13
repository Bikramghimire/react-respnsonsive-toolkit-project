import React from "react";
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

const SingleCart = ({ cartItem }) => {
  console.log("cartItems========", cartItem);
  return (
    <ProductStyle>
      <ProductImage src={cartItem.image} alt="nnn"></ProductImage>
      <ProductName variant="p">{cartItem.title}</ProductName>
      <ProductCounter>
        <CounterButton>+</CounterButton>
        <CounterInput
          size="small"
          variant="outlined"
          value={cartItem.cartQuantity}
        ></CounterInput>
        <CounterButton>-</CounterButton>
      </ProductCounter>
      <ProductPrice variant="p" component="div">
        {`${cartItem.cartQuantity} * ${cartItem.price}`}= $
        {cartItem.cartQuantity * cartItem.price}
      </ProductPrice>
      <DeleteIcon color="secondary" />
    </ProductStyle>
  );
};

export default SingleCart;
