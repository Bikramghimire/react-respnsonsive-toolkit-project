import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/item/${item.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Counts:{item.rating.count}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Counts:{item.rating.rate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default Item;
