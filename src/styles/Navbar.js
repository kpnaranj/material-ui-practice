import { makeStyles } from "@material-ui/core";

//CSS styles
export const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
  },
  nav_Avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  nav_Appbar: {
    backgroundColor: "#222",
  },
  nav_ArrowBack: {
    color: theme.palette.primary.main,
  },
  nav_Brand: {
    color: "tan",
  },
}));
