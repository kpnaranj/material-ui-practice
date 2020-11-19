import { Fragment } from "react";
//Head of the part of document
import Head from "next/head";
//Material-UI import functions
import { useStyles } from "../styles/home/Home";
//Material-UI import features
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider"
//Material-UI icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";


function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        {/**Head for SEO development */}
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/**Main bar */}
        <AppBar color="inherit" className={classes.appBar}>
          {/**Gives the line setup */}
          <Toolbar>
            {/**it gives the extensions */}
            <IconButton
              edge="start"
              className={classes.menuIcon}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img src="/img/preto.png" alt="logo" className={classes.logo} />
            <div className={classes.grow} />
            <IconButton className={classes.icons} color="inherit">
              <VideoCallIcon />
            </IconButton>
            <IconButton className={classes.icons} color="inherit">
              <MoreVertIcon />
            </IconButton>
            <IconButton className={classes.icons} color="inherit">
              <AppsIcon />
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="secondary"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {/*   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Typography variant="h5">This is the main menu</Typography>
      </div>
    </Fragment>
  );
}

export default Home;
