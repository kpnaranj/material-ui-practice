import { Fragment } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function Navbar() {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navbar;
