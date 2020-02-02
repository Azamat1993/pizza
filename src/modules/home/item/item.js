import React, { useContext } from "react";
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

import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "./style";

export const Item = ({ item }) => {
  const classes = useStyles();
  const store = useContext(StoreContext);

  const onAdd = () => store.list.add(item);

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton onClick={onAdd} aria-label="settings">
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
