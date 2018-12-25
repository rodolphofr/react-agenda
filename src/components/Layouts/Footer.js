import * as React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme: any): any => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    width: '100%',
  },
  fabButton: {
    float: 'right',
    margin: theme.spacing.unit * 4,
    backgroundColor: '#2196f3',
    [theme.breakpoints.up('lg')]: {
      width: 70,
      height: 70,
    },
  },
});

type Props = {
  classes: any,
  onClickAddHandler: Function,
};

const Footer = (props: Props): React.Element<'div'> => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fabButton}
        onClick={props.onClickAddHandler}
        size="large"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default withStyles(styles)(Footer);
