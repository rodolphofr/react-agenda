import * as React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import blue from '@material-ui/core/colors/blue';
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  withStyles,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';

import { phoneNumberToBRFormat } from '~/utils';
import type { PersonalContact } from '~/store';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

type Props = {
  data: PersonalContact,
  classes: any,
  ...$Shape<any>,
};

const ContactInfoDialog = (props: Props): React.Element<Dialog> => {
  const { data, classes, ...others } = props;
  return (
    <Dialog aria-labelledby="simple-dialog-title" {...others}>
      <DialogTitle>{data.name}</DialogTitle>
      <React.Fragment>
        <List>
          <ListItem disabled>
            <ListItemText>E-mails</ListItemText>
          </ListItem>
          {data.contacts.emails.map(
            (email: string): ListItem => (
              <ListItem button key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ),
          )}
          <ListItem disabled>
            <ListItemText>Telefones</ListItemText>
          </ListItem>
          {data.contacts.phoneNumbers.map(
            ({ number }: { number: number }): ListItem => (
              <ListItem button key={number}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={phoneNumberToBRFormat(number)} />
              </ListItem>
            ),
          )}
        </List>
      </React.Fragment>
    </Dialog>
  );
};

export default withStyles(styles)(ContactInfoDialog);
