import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    maxHeight: "90%",
    overflow: "auto",
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 3)
  },
  buttons: {
    marginTop: theme.spacing(3)
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}));
