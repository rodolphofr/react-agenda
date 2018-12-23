import React from 'react';
import { AppBar, Typography, Toolbar, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    backgroundColor: '#2196f3'
  },
  typography: {
    color: theme.palette.common.white,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 0,
    marginBottom: 0,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: 23,
      marginRight: 10
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 35,
      marginRight: 10
    }
  }
});

const Header = ({ classes, children }) => {

  return (
    <AppBar position='relative' className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.typography} gutterBottom>
          Contact.me
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withStyles(styles)(Header);
