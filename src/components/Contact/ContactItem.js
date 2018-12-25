import * as React from 'react';
import { Avatar, ListItem, withStyles, ListItemText } from '@material-ui/core';
import type { PersonalContact } from '~/store';

const styles = {
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

type Props = {
  data: PersonalContact,
  classes: any,
  ...$Shape<any>,
};

const ContactItem = (props: Props): React.Element<ListItem> => {
  const { data, classes, ...others } = props;
  return (
    <ListItem button {...others}>
      <Avatar
        className={classes.avatar}
        alt={`avatar de ${data.name}`}
        src={`/avatars/${data.avatar}.jpg`}
      />
      <ListItemText primary={data.name} secondary={data.position} />
    </ListItem>
  );
};

export default withStyles(styles)(ContactItem);
