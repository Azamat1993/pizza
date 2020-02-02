import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  content: {
    maxWidth: 900,
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    flexGrow: 1
  }
}));
