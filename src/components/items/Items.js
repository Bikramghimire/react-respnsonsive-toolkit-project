import { Box, Grid } from "@mui/material";
import React from "react";
import Item from "../item/Item";

const Items = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: "30px 10px" }}>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.id}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Items;
