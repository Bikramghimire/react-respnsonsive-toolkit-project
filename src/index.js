import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, { productsFetch } from "./features/productSlice";
import cardReducer, { getTotalCart } from "./features/cartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cardReducer,
  },
});
store.dispatch(productsFetch());
store.dispatch(getTotalCart());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
