//React imports
import { Fragment } from "react";
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
  //Define material-ui classes
  const classes = useStyles();
  return (
    <Fragment>
      <Box component="div" className={classes.menuSliderContainer}>
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
              <ListItem key={index}>
                <ListItemIcon>{icon.listIcon}</ListItemIcon>
                <ListItemText>{icon.listText}</ListItemText>;
              </ListItem>
            );
          })}
          {/**End loop  */}
        </List>
        {/**End of sidebar */}
      </Box>
      {/**Start of the navegation bar */}
      <Box component="nav">
        <AppBar position="static" className={classes.nav_Appbar}>
          <Toolbar>
            <IconButton />
            <ArrowBack className={classes.nav_ArrowBack} />
            <IconButton />
            <Typography variant="h5" className={classes.nav_Brand}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/**End of navegation */}
    </Fragment>
  );
}
export default NavBar;
