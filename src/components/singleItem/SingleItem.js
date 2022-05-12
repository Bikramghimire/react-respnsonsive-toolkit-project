import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";

const SingleItem = () => {
  const params = useParams();
  const productData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("product data", productData.items);
  console.log("paras", params.id);
  let singledata = productData?.items?.find((item) => item.id == params.id);
  console.log(singledata);
  const handleaddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div>
      <img src={singledata.image} height="200px" width="200px" alt="ecom" />
      <h4>{singledata.title}</h4>
      <h2>{singledata.price}</h2>
      <p>{singledata.description}</p>
      <button onClick={() => handleaddToCart(singledata)}>ADD TO Cart</button>
    </div>
  );
};

export default SingleItem;
