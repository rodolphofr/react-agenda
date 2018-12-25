import * as React from 'react';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  withStyles,
  Slide,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#2196f3',
  },
  gap: {
    flex: 1,
  },
};

type Props = {
  open: boolean,
  onClose: Function,
  classes: any,
};

function transitionType(props: Props): React.Element<Slide> {
  return <Slide direction="up" {...props} />;
}

const ContactForm = (props: Props): React.Element<Dialog> => {
  const { classes } = props;
  return (
    <Dialog fullScreen open={props.open} TransitionComponent={transitionType}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={props.onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.gap} />
          <Button color="inherit" size="large">
            Adicionar
          </Button>
        </Toolbar>
      </AppBar>
    </Dialog>
  );
};

export default withStyles(styles)(ContactForm);
