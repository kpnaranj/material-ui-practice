//React imports
import { Fragment, useState, useEffect } from "react";
//Material-UI design export
import { useStyles } from "../styles/Navbar";
//Import material-ui core items
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
//Import material ui icons
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

//Function that will have all
//icons to display
const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Porfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

//Component function Navbar with all features
function NavBar() {
  //Define states we will be using
  const [state, setState] = useState({
    right: false,
  });

  //Function to toggle the slider (open-close)
  const toggleSlider = (slider, open) => () => {
    {
      /**Bring all states  */
    }
    setState({ ...state, [slider]: open });
  };

  //Define material-ui classes
  const classes = useStyles();
  //function to hide the sidebar by clicking
  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        className={classes.nav_Avatar}
        src="/avatar.png"
        alt="Russel Crowe"
      />
      {/**The divider adds a line below */}
      <Divider />
      {/**This is the side bar */}
      <List>
        {/**Map all icons  */}
        {menuIcons.map((icon, index) => {
          return (
            <ListItem button key={index}>
              <ListItemIcon className={classes.sidebar_Icon}>
                {icon.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.sidebar_Text}
                primary={icon.listText}
              />
            </ListItem>
          );
        })}
        {/**End loop  */}
      </List>
      {/**End of sidebar */}
    </Box>
  );

  {
    /**Display the following code */
  }
  return (
    <Fragment>
      {/**Start of the navegation bar */}
      <Box component="nav">
        <AppBar position="static" className={classes.nav_Appbar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)} />
            <ArrowBack className={classes.nav_ArrowBack} />
            <IconButton />
            <Typography variant="h5" className={classes.nav_Brand}>
              Portfolio
            </Typography>
            <Drawer
              anchor="right"
              onClose={toggleSlider("right", false)}
              open={state.right}
            >
              {sideList("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
      {/**End of navegation */}
    </Fragment>
  );
}
export default NavBar;
