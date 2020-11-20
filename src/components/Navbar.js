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
} from "@material-ui/core";
//Import material ui icons
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

function NavBar() {
  return (
    <Box component="nav">
      <AppBar>
        <Toolbar>
          <ArrowBack />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
