import React, { Component } from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const styles = theme => ({
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

class Footer extends Component {
  render() {
    const { classes, onClickAddHandler } = this.props;

    return (
      <div className={classes.footer}>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fabButton}
          onClick={onClickAddHandler}
          size="large"
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickAddHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(Footer);
