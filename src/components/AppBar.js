import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppBar(props) {
  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar variant="dense">
        <Typography color="inherit" variant="h6">
          Spaceship{' '}
          <span role="img" aria-label="spaceship">
            🚀
          </span>
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
