import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

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

  const handleNavClick = (path) => {
    props.history.push(path);
  };

  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <Typography variant="h3" color="inherit" className={classes.grow}>Cmail</Typography>
        <IconButton
          onClick={() => handleNavClick('/')}
          className={classes.menuButton}
          color="inherit"
          aria-label="Inbox"
        >
          <Icon>all_inbox</Icon>
        </IconButton>
        <IconButton
          onClick={() => handleNavClick('/new')}
          className={classes.menuButton}
          color="inherit"
          aria-label="New Email"
        >
          +<Icon>email</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(withStyles(styles)(NavBar));
