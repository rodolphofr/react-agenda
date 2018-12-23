import React from 'react';
import { Avatar, ListItem, withStyles, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

const ContactItem = ({ data, classes, ...others }) => {

  return (
    <ListItem button {...others}>
      <Avatar className={classes.avatar} alt={`avatar de ${data.name}`} src={`/avatars/${data.avatar}.jpg`} />
      <ListItemText primary={data.name} secondary={data.position} />
    </ListItem>
  );

};

ContactItem.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(ContactItem);
