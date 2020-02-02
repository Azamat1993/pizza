import React from "react";
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  CardHeader
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { useStyles } from "./style";

export const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        title={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
