import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("update the item on cart", {
          position: "bottom-left",
        });
      } else {
        const newCartItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newCartItem);
        toast.success("added the item on cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = [...newCartItem];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.success("remove the item from the cart", {
        position: "bottom-left",
      });
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.success("increase the cart by 1", {
        position: "bottom-left",
      });
    },
    decrementCart(state, action) {
      console.log("decrement is calling");
      if (state.cartItems.cartQuantity >= 0) {
        toast.error("cannot decrease to less then 0", {
          position: "bottom-left",
        });
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload
        );
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      }
    },
    getTotalCart(state, action) {
      const totalData = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },

        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = totalData.quantity;
      state.cartTotalAmount = totalData.total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCart,
  decrementCart,
  getTotalCart,
} = cartSlice.actions;
export default cartSlice.reducer;
