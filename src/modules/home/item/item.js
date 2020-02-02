import React from "react";
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useStyles } from "./style";

export const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddShoppingCartIcon />
          </IconButton>
        }
        title={item.title}
      />

      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
