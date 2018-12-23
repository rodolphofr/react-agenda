import React from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Button, withStyles, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#2196f3'
  },
  gap: {
    flex: 1,
  }
};

function transitionType(props) {
  return <Slide direction="up" {...props} />;
}

const ContactForm = ({ open, onClose, classes }) => {

  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={transitionType}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <div className={classes.gap}></div>
          <Button color="inherit" size="large">
            Adicionar
          </Button>
        </Toolbar>
      </AppBar>
    </Dialog>
  );

};

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(ContactForm);
