import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Items from "../items/Items";

const Home = () => {
  const { isLoading, items, error } = useSelector((state) => state.products);
  return (
    <Container maxWidth="xl">
      {isLoading ? (
        <p>loading......</p>
      ) : error ? (
        <p>{error}</p>
      ) : items ? (
        <Items items={items} />
      ) : (
        <p>no data</p>
      )}
    </Container>
  );
};

export default Home;
