import * as React from 'react';
import { AppBar, Typography, Toolbar, withStyles } from '@material-ui/core';

const styles = (theme: any): any => ({
  appBar: {
    backgroundColor: '#2196f3',
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
      marginRight: 10,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 35,
      marginRight: 10,
    },
  },
});

const Header = ({
  classes,
  children,
}: {
  classes: any,
  children: React.Element<any>,
}): React.Element<AppBar> => {
  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.typography} gutterBottom>
          Contact.me
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
