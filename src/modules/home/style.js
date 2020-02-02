import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 900,
    marginTop: theme.spacing(5),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(5)
  }
}));
