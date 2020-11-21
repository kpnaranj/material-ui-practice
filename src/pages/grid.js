import { Grid, Paper, Box } from "@material-ui/core";

import React from "react";

function TestingGrid() {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item>Item 1</Grid>
        <Grid item>Item 2</Grid>
      </Grid>
    </div>
  );
}

export default TestingGrid;
