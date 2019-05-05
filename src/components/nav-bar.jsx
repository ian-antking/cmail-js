import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import '../styles/nav-bar.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <Typography variant="h3" color="inherit" className={classes.grow}>Cmail</Typography>
        <NavLink to="/">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Inbox"
          >
            <Icon>all_inbox</Icon>
          </IconButton>
        </NavLink>
        <NavLink to="/new">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="New Email"
          >
            +<Icon>email</Icon>
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);
